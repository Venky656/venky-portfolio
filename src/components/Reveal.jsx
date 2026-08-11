import { motion } from 'framer-motion'

const variants = {
  fade: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  elastic: {
    initial: { opacity: 0, scale: 0.7 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 1, type: 'spring', bounce: 0.4 },
  },
  slideRight: {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.9, type: 'spring', bounce: 0.35 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.9, type: 'spring', bounce: 0.35 },
  },
}

export default function Reveal({ children, className = '', delay = 0, variant = 'fade' }) {
  const v = variants[variant] || variants.fade
  return (
    <motion.div
      className={className}
      initial={v.initial}
      whileInView={v.whileInView}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...v.transition, delay }}
    >
      {children}
    </motion.div>
  )
}