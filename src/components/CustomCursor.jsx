import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [hovering, setHovering] = useState(false)
  const [projectHover, setProjectHover] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 25 })
  const springY = useSpring(y, { stiffness: 150, damping: 25 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    const move = (e) => {
      setHidden(false)
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target
      setHovering(!!t.closest && !!t.closest('a, button, [role="button"]'))
      setProjectHover(!!t.closest && !!t.closest('[data-project-hover]'))
    }
    const leave = () => setHidden(true)
    window.addEventListener('mousemove', move)
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  if (!enabled) return null

  const size = projectHover ? 40 : hovering ? 40 : 20

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[999]"
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-around ${hovering && !projectHover ? 'mix-blend-lighten' : ''}`}
            initial={{ width: 20, height: 20 }}
            style={{ width: size, height: size, transition: 'width 0.3s, height 0.3s' }}
          />
          <AnimatePresence>
            {projectHover && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
                className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gray-dark bg-black px-1 py-[1px] text-[7px] text-white leading-none"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                Click to visit
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}