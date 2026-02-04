import styles from './styles.module.css'
import ApiList from './ApiList'
import UpdatesList from './UpdatesList'
import { clsx } from 'clsx'

export default function UpdatesSection() {
  return (
    <section className={clsx(styles.bgbackgroundlight)}>
      <div className="py-20 container mx-auto px-6">
        <div className={styles.grid}>
          <ApiList />
          <UpdatesList />
        </div>
      </div>
    </section>
  )
}
