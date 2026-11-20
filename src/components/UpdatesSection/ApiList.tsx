import clsx from 'clsx'
import { useEffect, useState, useRef } from 'react'
import { apis } from '../../data/apis'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import Link from '@docusaurus/Link'
import { fetchGitHubUpdates, fetchCommitDetail } from '../../utils/github'
import { useLocation, useHistory } from '@docusaurus/router'


export default function ApiList() {
  const history = useHistory()
  const [updates, setUpdates] = useState<any[]>([])
  const latestSha = useRef<string | null>(null)
  const PAGE_SIZE = 5
  
  const [commitDetail, setCommitDetail] = useState<any>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [repository, setRespository] = useState<[]>([])
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === '/index'
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

  async function change(sha: string) {
    history.push(`/respository?nombre=${sha}`)
  
  

    try {
      const detail = await fetchGitHubUpdates()
      setCommitDetail(detail)
      console.log(updates);
    } catch (err) {
      console.error(err)
    } finally {
      
    }
    //setCommitDetail(await fetchCommitDetail(id.replace("?id=","")))
    //fetchCommitDetail(id.replace("?id=",""))
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary dark:text-white mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-primary rounded-full" />
        Proyectos 
      </h2>

      <div className="space-y-4">
        {apis.map((api, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: i * 0.05, // stagger elegante
            }}
          >
            <button onClick={(() => change(api.respository))}
              className={clsx(
                'bgwhite group w-full dark:bg-slate-800 p-5 rounded-xl border-l-4 border-primary !shadow-md hover:!shadow-xl transition-all cursor-pointer flex justify-between items-center'
              )}
            >
              <div className="flex items-center gap-4 group-hover:!text-[#003876] transition-colors">
                <span className="material-icons text-secondary">
                  {api.icon}
                </span>
                <span>{api.title}</span>
              </div>

              <span className="material-icons text-slate-300 group-hover:text-primary transition-colors">
                arrow_forward
              </span>
            </button>
          </motion.div>
        ))}
        <div className="relative">
         {isHome === false ? "" :
          <Link to={'/respository'} className="w-full absoluted left-0 justify-start group text-primary font-semibold flex items-center gap-2 hover:underline mt-0 ">ver todos las actualizaciones <span className="material-icons text-sm group-hover:ease-in duration-300   ">arrow_forward</span></Link>
        }
        </div>
      </div>
    </div>
  )
  
}
