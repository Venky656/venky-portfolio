import { useState, useEffect, useRef } from 'react'
import { Moon, Sun, Menu, X, Palette } from 'lucide-react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { useTheme, ACCENTS } from '../ThemeProvider'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Projects', href: '#projects' },
]

const mono = { fontFamily: "'Share Tech Mono', monospace" }

function MagnetItem({ children, onClick, className }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })
  const [clickScale, setClickScale] = useState(1)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const offsetX = e.clientX - centerX
    const offsetY = e.clientY - centerY
    x.set(offsetX * 0.8)
    y.set(offsetY * 0.8)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const handleClick = (e) => {
    setClickScale(1.6)
    setTimeout(() => setClickScale(1), 400)
    onClick?.(e)
  }

  return (
    <motion.span
      ref={ref}
      className={cn('pointer-events-auto', className)}
      style={{ x: springX, y: springY }}
      animate={{ scale: clickScale }}
      transition={{ type: 'spring', stiffness: 260, damping: 10 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </motion.span>
  )
}

export default function Navbar() {
  const { theme, accent, toggleTheme, setAccentTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [colorOpen, setColorOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      let current = '#home'
      for (const link of links) {
        const el = document.querySelector(link.href)
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 3) {
          current = link.href
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          'mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 md:px-6',
          scrolled || open
            ? 'border border-border bg-card/90 shadow-lg backdrop-blur-md'
            : 'border border-transparent bg-transparent'
        )}
      >
        <a
          href="#home"
          className="font-heading text-2xl font-extrabold tracking-tight"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          VK<span className="text-primary">.</span>
        </a>

        <ul
          className={cn(
            'absolute left-0 right-0 top-full mt-2 flex flex-col items-center gap-1 rounded-2xl border border-border bg-card p-4 shadow-lg transition-all duration-300 lg:static lg:mt-0 lg:flex-row lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none',
            open ? 'visible opacity-100' : 'invisible opacity-0 lg:visible lg:opacity-100'
          )}
        >
          {links.map((link) => (
            <li key={link.href} className="w-full lg:w-auto">
              <MagnetItem onClick={() => setOpen(false)}>
                <a
                  href={link.href}
                  className={cn(
                    'block px-3 py-2 text-center text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 lg:py-1 hover:opacity-50',
                    active === link.href
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  )}
                  style={mono}
                >
                  {link.label}
                </a>
              </MagnetItem>
            </li>
          ))}
          <li className="w-full px-3 pt-3 lg:hidden">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-primary px-5 py-3 text-center font-semibold uppercase tracking-[0.2em] text-primary-foreground"
              style={mono}
            >
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-xl bg-primary px-5 py-2.5 font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:scale-105 lg:block"
            style={mono}
          >
            Contact me
          </a>
          <div className="relative">
            <button
              onClick={() => setColorOpen(!colorOpen)}
              aria-label="Theme color"
              title="Accent color"
              className={cn(
                'flex size-9 items-center justify-center rounded-full border transition-all duration-300 hover:rotate-12',
                colorOpen
                  ? 'border-primary/60 bg-primary/10 text-primary shadow-[0_0_16px_-4px_color-mix(in_srgb,var(--color-primary)_60%,transparent)]'
                  : 'border-border bg-card'
              )}
            >
              <Palette className="size-4" style={{ color: `var(--accent)` }} />
            </button>

            <AnimatePresence>
              {colorOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.9 }}
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.45 }}
                  className="absolute right-0 top-11 z-50 origin-top-right"
                >
                  <div
                    className="flex items-center gap-1.5 rounded-2xl border border-border/80 bg-card/90 p-2.5 shadow-2xl shadow-black/50 backdrop-blur-xl"
                  >
                    {ACCENTS.map((a) => {
                      const isActive = accent === a.name
                      return (
                        <button
                          key={a.name}
                          onClick={() => { setAccentTheme(a.name); setColorOpen(false) }}
                          aria-label={`${a.name} theme`}
                          tabIndex={colorOpen ? 0 : -1}
                          className={cn(
                            'relative flex size-7 items-center justify-center rounded-lg transition-all duration-200',
                            'hover:scale-110 hover:shadow-[0_0_14px_-2px_var(--color-primary)]'
                          )}
                          style={{
                            backgroundColor: isActive ? a.color : 'transparent',
                            border: `1.5px solid ${a.color}`,
                            boxShadow: isActive
                              ? `0 0 12px -2px ${a.color}`
                              : 'inset 0 0 0 0 transparent',
                          }}
                        >
                          <motion.span
                            initial={false}
                            animate={{
                              scale: isActive ? 1 : 0,
                              backgroundColor: isActive ? '#fff' : 'transparent',
                            }}
                            transition={{ type: 'spring', bounce: 0.4, duration: 0.4 }}
                            className="size-1.5 rounded-full"
                          />
                          <AnimatePresence>
                            {isActive && (
                              <motion.span
                                initial={{ opacity: 0, scale: 1.4 }}
                                animate={{ opacity: 1, scale: 1.15 }}
                                exit={{ opacity: 0, scale: 1.4 }}
                                transition={{ duration: 0.25 }}
                                className="pointer-events-none absolute inset-0 rounded-lg"
                                style={{ boxShadow: `0 0 0 1.5px ${a.color}, 0 0 16px -2px ${a.color}` }}
                              />
                            )}
                          </AnimatePresence>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card transition-transform hover:rotate-20"
          >
            {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex size-9 items-center justify-center rounded-md border border-border bg-card lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>
    </header>
  )
}
