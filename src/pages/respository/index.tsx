import { useEffect, useState } from 'react'
import Layout from '@theme/Layout'
import { useLocation, useHistory } from '@docusaurus/router'
import { motion } from 'framer-motion'

import ApiList from '../../components/UpdatesSection/ApiList'
import respositorioImg from '../../assets/img/images.jpeg'
import { fetchGitHubRespository } from '../../utils/github'

export default function UpdatesPage() {
  const location = useLocation()
  const history = useHistory()

  const PAGE_SIZE = 5

  const [activeDay, setActiveDay] = useState<string | null>(null)
  const [updates, setUpdates] = useState<any[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  const isHome =
    location.pathname === '/' ||
    location.pathname === '/index'

  const searchParams = new URLSearchParams(location.search)
  const currentRepository =
    searchParams.get('nombre')?.trim() || ''

  async function loadUpdates() {
    if (!currentRepository) {
      setUpdates([])
      return
    }

    try {
      const data = await fetchGitHubRespository(
        currentRepository,
      )

      if (!data) {
        setUpdates([])
        return
      }

      const dataUpdates = isHome
        ? data.slice(0, 3)
        : data

      const visibleCount = page * PAGE_SIZE
      const paginated = dataUpdates.slice(
        0,
        visibleCount,
      )

      setUpdates(paginated)
      setHasMore(dataUpdates.length > paginated.length)
    } catch (error) {
      console.error(
        `Error cargando repositorio ${currentRepository}`,
        error,
      )
      setUpdates([])
    }
  }

  useEffect(() => {
    setPage(1)
  }, [currentRepository])

  useEffect(() => {
    loadUpdates()
  }, [page, currentRepository])

  function parseLocalDate(dateString?: string) {
    if (!dateString) {
      return new Date()
    }

    const [year, month, day] = dateString
      .split('T')[0]
      .split('-')
      .map(Number)

    return new Date(year, month - 1, day)
  }

  function groupByDay(updates: any[]) {
    return updates.reduce(
      (acc: Record<string, any[]>, update) => {
        const date = parseLocalDate(
          update.date ||
          update.commit?.author?.date ||
          update.author?.date
        )

        const key =
          date.toLocaleDateString('sv-SE')

        if (!acc[key]) {
          acc[key] = []
        }

        acc[key].push(update)

        return acc
      },
      {},
    )
  }

  function daysAgo(dateString?: string) {
    const now = new Date()
    const past = new Date(dateString)

    const diffDays = Math.floor(
      (now.getTime() - past.getTime()) /
      (1000 * 60 * 60 * 24),
    )
    console.log(dateString + " " + diffDays)

    if (diffDays === 0) return 'Hoy'
    if (diffDays === 1) return 'Hace 1 día'
    if (diffDays < 7)
      return `Hace ${diffDays} días`

    const weeks = Math.floor(diffDays / 7)

    if (weeks < 5)
      return `Hace ${weeks} sem`

    const months = Math.floor(
      diffDays / 30,
    )

    return `Hace ${months} mes${months > 1 ? 'es' : ''
      }`
  }

  function scrollToDay(day: string) {
    const el = document.getElementById(
      `day-${day}`,
    )

    if (!el) return

    const yOffset = 150

    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      yOffset

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    })

    el.setAttribute('tabindex', '-1')
    el.focus({ preventScroll: true })
  }

  function change(slug: string) {
    history.push(
      `/updates/${slug}?nombre=${currentRepository}`,
    )
  }

  const groupedUpdates =
    groupByDay(updates)

  const days =
    Object.keys(groupedUpdates)

  useEffect(() => {
    const sections =
      document.querySelectorAll<HTMLElement>(
        'section[id^="day-"]',
      )

    const observer =
      new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveDay(
                entry.target.id.replace(
                  'day-',
                  '',
                ),
              )
            }
          })
        },
        {
          rootMargin:
            '-40% 0px -55% 0px',
          threshold: 0,
        },
      )

    sections.forEach(section =>
      observer.observe(section),
    )

    return () => observer.disconnect()
  }, [days])

  return (
    <Layout title="Actualizaciones">
      <section className="margin-vert--lg">
        {!currentRepository && (
          <div className="container mx-auto px-6 py-7">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 min-h-[45rem]">
              <ApiList />

              <div className="relative">
                <img
                  src={respositorioImg}
                  alt="Repositorio"
                  className="absoluted top-[1rem] rounded-xl bottom-[22rem]"
                />
              </div>
            </section>
          </div>
        )}
      </section>

      <div className="relative">
        <div className="container mx-auto"></div>

        <div
          className={
            !isHome
              ? 'px-6 md:grid grid-cols-[250px_1fr] gap-10'
              : 'md:grid grid-cols-1 gap-10'
          }
        >
          {location.search && (
            <aside className="md:sticky top-24 h-fit">
              <h2 className="text-lg font-bold text-secondary dark:text-white mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full" />
                Fechas de Versiones
              </h2>

              <nav className="flex flex-col divide-y-4 divide-y-reverse divide-gray-900">
                {days.map(day => {
                  const isActive =
                    activeDay === day

                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() =>
                        scrollToDay(day)
                      }
                      className={`block w-full text-left transition-colors ${isActive
                        ? '!text-red-500 font-semibold'
                        : 'text-slate-500 hover:text-primary'
                        }`}
                    >
                      {new Date(
                        day,
                      ).toLocaleDateString(
                        'es',
                        {
                          weekday: 'short',
                          day: 'numeric',
                          month: 'short',
                        },
                      )}
                    </button>
                  )
                })}
              </nav>
            </aside>
          )}

          <main
            className={
              location.search
                ? 'space-y-12 pb-8 '
                : 'space-y-4 pb-8 hidden'
            }
          >
            <h2 className="text-2xl font-bold text-secondary dark:text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-primary rounded-full" />
              Últimas Actualizaciones
              {currentRepository &&
                ` - ${currentRepository}`}
            </h2>

            {days.map(day => {
              const dateLabel =
                new Date(
                  day,
                ).toLocaleDateString(
                  'es',
                  {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  },
                )

              return (
                <section
                  key={day}
                  id={`day-${day}`}
                  tabIndex={-1}
                >
                  {!isHome && (
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />

                      <h3 className="text-sm font-bold uppercase text-slate-500">
                        {dateLabel}
                      </h3>

                      <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                    </div>
                  )}

                  <div className="space-y-4">
                    {groupedUpdates[
                      day
                    ].map(
                      (
                        update,
                        index,
                      ) => {
                        const date =
                          new Date(
                            update.commit.author.date,
                          )

                        return (
                          <motion.div
                            key={
                              update.slug
                            }
                            initial={{
                              opacity: 0,
                              y: 24,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                              margin:
                                '-80px',
                            }}
                            transition={{
                              duration:
                                0.45,
                              ease:
                                'easeOut',
                              delay:
                                index *
                                0.05,
                            }}
                          >
                            <motion.div
                              whileHover={{
                                y: -4,
                                scale:
                                  1.015,
                              }}
                              transition={{
                                type:
                                  'spring',
                                stiffness:
                                  300,
                                damping:
                                  22,
                              }}
                            >
                              <button
                                onClick={() =>
                                  change(
                                    update.slug,
                                  )
                                }
                                className="
                                  bg-white
                                  dark:bg-slate-800
                                  p-5
                                  rounded-xl
                                  relative
                                  group
                                  shadow-sm
                                  hover:shadow-lg
                                  w-full
                                  flex
                                  gap-4
                                  transition-shadow
                                  border
                                  border-transparent
                                  hover:border-slate-200
                                  dark:hover:border-slate-700
                                "
                              >
                                <div className="min-w-[80px] text-center">
                                  <div className="text-primary font-bold text-xl leading-none">
                                    <span className="text-primary font-bold text-xl leading-none">{date.getDate()}</span>
                                  </div>

                                  <span className="text-[10px] uppercase font-bold text-slate-400 mt-1">
                                    {date.toLocaleDateString(
                                      'es',
                                      {
                                        month:
                                          'short',
                                        year:
                                          'numeric',
                                      },
                                    )}
                                  </span>
                                </div>

                                <div>
                                  <h4 className="font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">
                                    {
                                      update.commit.message
                                    }
                                  </h4>

                                  <p className="text-sm text-secondary-description font-[600] mt-1">
                                    {
                                      update.description
                                    }
                                  </p>
                                </div>

                                <span className="absolute right-3 top-3 text-[10px] font-bold text-slate-400">
                                  {daysAgo(
                                    date
                                  )}
                                </span>
                              </button>
                            </motion.div>
                          </motion.div>
                        )
                      },
                    )}
                  </div>
                </section>
              )
            })}

            {hasMore && (
              <div className="flex justify-center">
                <button
                  onClick={() =>
                    setPage(
                      prev =>
                        prev + 1,
                    )
                  }
                  className="px-6 py-3 rounded-lg bg-primary text-white"
                >
                  Cargar más
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  )
}