import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Card } from '../ui/card';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
const FeatureList = [
  {
    title: 'FrontEnd',
    Svg: 'brush',
    bgColor:'bg-blue-50 ',
    color:'text-secondary',
    description: (
      <>
        Librerías de UI, Design System 'Patria' y guías de experiencia de usuario institucional.
      </>
    ),
  },
  {
    title: 'BackEnd',
    Svg:'code',
    bgColor:'bg-red-50',
    color:'text-primary',
    description: (
      <>
        Arquitecturas de microservicios, estándares de seguridad y protocolos de comunicación.
      </>
    ),
  },
  {
    title: 'Base de datos ',
    Svg: 'storage',
     bgColor:'bg-slate-50',
    color:'text-slate-700',
    description: (
      <>
       Esquemas de datos fiscales, normalización y políticas de gobernanza de información.
      </>
    ),
  },
    {
    title: 'Infraestructura',
    Svg: 'cloud',
    bgColor:'bg-emerald-50',
    color:'!text-emerald-700',
    description: (
      <>
        Despliegue en nube gubernamental, Kubernetes, CI/CD y monitoreo de sistemas.
      </>
    ),
  },
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

function Feature({ Svg, title, description, color, bgColor }) {
  return (
    <motion.div variants={cardVariants}>
      <Link
        to={'/' + title.toLowerCase() + '/intro'}
        className={clsx(
          'group bg-white block dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
        )}
      >
        <div
          className={clsx(
            bgColor,
            'w-16 h-16 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'
          )}
        >
          <span
            className={clsx(
              color,
              'material-icons dark:text-blue-400 text-3xl'
            )}
          >
            {Svg}
          </span>
        </div>

        <Heading
          as="h3"
          className="text-[var(--ifm-color-primary-light)] text-xl font-bold mb-3"
        >
          {title}
        </Heading>

        <p className="text-[var(--text-secundary)] dark:text-slate-400 mb-6 line-clamp-2">
          {description}
        </p>

        <span className="text-sm font-bold text-primary flex items-center gap-1 group-hover:text-black">
          Leer más
          <span className="material-icons text-xs group-hover:translate-x-2 transition-transform">
            chevron_right
          </span>
        </span>
      </Link>
    </motion.div>
  )
}


export default function HomepageFeatures() {
  return (
    <>
    <section className={clsx('',styles.bgbackgroundlight)}>
      <div className='py-20 container mx-auto px-6'>
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 w-full">
        <div>
        <h2 class="text-3xl font-bold text-secondary dark:text-white mb-2">Explora por Categorías</h2>
        <p class="text-slate-500 dark:text-slate-400">Todo lo que necesitas para integrar y desplegar tus soluciones.</p>
        </div>
        <a class="text-primary font-semibold flex items-center gap-2 hover:underline" href="#">
                        Ver todo el catálogo <span class="material-icons text-sm">arrow_forward</span>
        </a>
      </div>
       
      <motion.div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
>
  {FeatureList.map((props, idx) => (
    <Feature key={idx} {...props} />
  ))}
</motion.div>
        </div>
    </section>
   
</>
  );
}
