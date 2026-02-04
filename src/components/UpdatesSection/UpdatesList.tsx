import { useEffect, useState,useRef } from 'react'
import Link from '@docusaurus/Link'
import { fetchGitHubUpdates } from '../../utils/github'
import { motion } from 'framer-motion'

export default function UpdatesList() {
    const [updates, setUpdates] = useState<any[]>([])
  const latestSha = useRef<string | null>(null)

  async function loadUpdates() {
    const data = await fetchGitHubUpdates(latestSha.current || undefined)

    if (data) {
      latestSha.current = data[0].slug
      setUpdates(data)
    }
  }

  useEffect(() => {
    loadUpdates()

    const interval = setInterval(loadUpdates, 60_000) // ⏱ cada 1 min
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

  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary dark:text-white mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-primary rounded-full" />
        Últimas Actualizaciones
      </h2>

      <div className="space-y-[1rem]">
        {updates.map((update, index) => {
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
                delay: index * 0.05, // stagger suave
              }}
            >
              <motion.div
                whileHover={{
                  y: -4,
                  scale: 1.015,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 22,
                }}
                className="relative"
              >
                <Link
                  to={`/updates/${update.slug}`}
                  className="
                    bg-white dark:bg-slate-800
                    p-5 rounded-xl
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
                    <h4 className="font-bold text-secondary dark:text-white hover:text-primary transition-colors">
                      {update.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
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
    </div>
  )
}
