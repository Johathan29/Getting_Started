import clsx from 'clsx'
import { apis } from '../../data/apis'
import styles from './styles.module.css'
import { motion } from 'framer-motion'

export default function ApiList() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary dark:text-white mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-primary rounded-full" />
        Documentación de APIs
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
            <div
              className={clsx(
                'bgwhite group dark:bg-slate-800 p-5 rounded-xl border-l-4 border-primary !shadow-md hover:!shadow-xl transition-all cursor-pointer flex justify-between items-center'
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
