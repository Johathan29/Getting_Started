import { useEffect, useState, useRef } from 'react'
import Link from '@docusaurus/Link'
import { useLocation } from '@docusaurus/router'
import { fetchGitHubUpdates } from '../../utils/github'
import { motion } from 'framer-motion'

export default function UpdatesList() {
  const [updates, setUpdates] = useState<any[]>([])
  const latestSha = useRef<string | null>(null)

  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === '/index'
  console.log(isHome)
  const PAGE_SIZE = 5

const [page, setPage] = useState(1)
const [hasMore, setHasMore] = useState(true)

const [activeDay, setActiveDay] = useState<string | null>(null)
 async function loadUpdates() {
  const data = await fetchGitHubUpdates()
  if (!data) return

  const dataUpdates = isHome ? data.slice(0, 3) : data

  const visibleCount = page * PAGE_SIZE
  const paginated = dataUpdates.slice(0, visibleCount)

  setUpdates(paginated)
  setHasMore(dataUpdates.length > paginated.length)
}
useEffect(() => {
  loadUpdates()
}, [page])

  useEffect(() => {
    loadUpdates()
    const interval = setInterval(loadUpdates, 60_000)
    return () => clearInterval(interval)
  }, [])

  function daysAgo(dateString: string) {
    const now = new Date()
    const past = new Date(dateString)
    const diffDays = Math.floor(
      (now.getTime() - past.getTime()) / (1000 * 60 * 60 * 24),
    )

    if (diffDays === 0) return 'Hoy'
    if (diffDays === 1) return 'Hace 1 día'
    if (diffDays < 7) return `Hace ${diffDays} días`

    const weeks = Math.floor(diffDays / 7)
    if (weeks < 5) return `Hace ${weeks} sem`

    const months = Math.floor(diffDays / 30)
    return `Hace ${months} mes${months > 1 ? 'es' : ''}`
  }
  function parseLocalDate(dateString: string) {
  const [year, month, day] = dateString.split('T')[0].split('-').map(Number)
  return new Date(year, month - 1, day +1)
}
 function groupByDay(updates: any[]) {
  return updates.reduce((acc: Record<string, any[]>, update) => {
    const date = parseLocalDate(update.date)

    const key = date.toLocaleDateString('sv-SE')

    if (!acc[key]) acc[key] = []
    acc[key].push(update)

    return acc
  }, {})
}


const groupedUpdates = groupByDay(updates)
const days = Object.keys(groupedUpdates)
useEffect(() => {
  const sections = document.querySelectorAll<HTMLElement>('section[id^="day-"]')

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveDay(entry.target.id.replace('day-', ''))
        }
      })
    },
    {
      rootMargin: '-40% 0px -55% 0px', // zona central de la pantalla
      threshold: 0,
    }
  )

  sections.forEach(section => observer.observe(section))

  return () => observer.disconnect()
}, [days])
function scrollToDay(day: string) {
  const el = document.getElementById(`day-${day}`)
  if (!el) return

  const yOffset = 150 // altura del header sticky
  const y =
    el.getBoundingClientRect().top + window.scrollY - yOffset

  window.scrollTo({
    top: y,
    behavior: 'smooth',
  })

  // foco accesible
  el.setAttribute('tabindex', '-1')
  el.focus({ preventScroll: true })
}

  return (
    <div>
      <div className='constainer mx-auto'>

      </div>
      
<div className={isHome===false ? 'px-6 md:grid grid-cols-[250px_1fr] gap-10':'md:grid grid-cols-1 gap-10'}>
  { isHome===false ? 
     <aside className="md:sticky top-24 h-fit">
       <h2 className="text-lg font-bold text-secondary dark:text-white mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-primary rounded-full" />
        Fecha de Versiones
      </h2>
  <nav className="flex flex-col  divide-y-4 divide-y-reverse divide-gray-900">
    {days.map(day => {
      const isActive = activeDay === day

      return (
       <button
  key={day}
  type="button"
  onClick={() => scrollToDay(day)}
  className={`
    block w-full text-left transition-colors
    ${isActive
      ? '!text-red-500 font-semibold'
      : 'text-slate-500 hover:text-primary'}
  `}
>
  {new Date(day).toLocaleDateString('es', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })}
</button>
      )
    })}
  </nav>
</aside>

 : ""}
     <main className={isHome===false ?'space-y-12' : 'space-y-4'}>
       <h2 className="text-2xl font-bold text-secondary dark:text-white mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-primary rounded-full" />
        Últimas Actualizaciones
      </h2>
  {days.map(day => {
    const dateLabel = new Date(day).toLocaleDateString('es', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

    return (
      <section key={day} id={`day-${day}`} tabIndex={-1}>
        {/* Header del día */}
        {isHome===false ? 
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
          <h3 className="text-sm font-bold uppercase text-slate-500">
            {dateLabel}
          </h3>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        </div>
:""}
        <div className="space-y-[1rem]">
          {groupedUpdates[day].map((update, index) => {
            const date = new Date(update.date)

            return (
              <motion.div
                key={update.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.45,
                  ease: 'easeOut',
                  delay: index * 0.05,
                }}
              >
                {/* 👉 tu card EXACTA */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <Link
                    to={`/updates/${update.slug}`}
                    className="
                      bgwhite dark:bg-slate-800
                      p-5 rounded-xl relative group
                      shadow-sm hover:shadow-lg
                      flex gap-4
                      transition-shadow
                      border border-transparent
                      hover:border-slate-200 dark:hover:border-slate-700
                    "
                  >
                    <div className="min-w-[80px] text-center">
                      <div className="text-primary font-bold text-xl leading-none">
                        {date.getDate()}
                      </div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 mt-1">
                        {date.toLocaleDateString('es', {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">
                        {update.title}
                      </h4>
                      <p className="text-sm text-secondary-description font-[600] mt-1">
                        {update.description}
                      </p>
                    </div>

                    <span className="absolute right-3 top-3 text-[10px] font-bold text-slate-400">
                      {daysAgo(update.date)}
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </section>
    )
  })}
</main>
    </div>
    {isHome===false ?"" :
    <Link to={'/updates'} className="w-full group text-primary font-semibold flex items-center gap-2 hover:underline">ver todos las actualizaciones <span className="material-icons text-sm group-hover:ease-in duration-300   ">arrow_forward</span></Link>
    }
    {!isHome  && hasMore && (
  <div className="flex justify-center mt-12">
    <button
      onClick={() => setPage(p => p + 1)}
      className="
        px-6 py-3
        rounded-xl
        bg-primary text-white
        font-semibold
        hover:opacity-90
        transition
      "
    >
      Cargar más actualizaciones
    </button>
  </div>
)}
    </div>
  )
}
