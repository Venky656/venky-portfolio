import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code2 } from 'lucide-react'
import { profile } from '../data/portfolioData'

const [firstName, ...lastName] = profile.fullName.split(' ')

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden px-4 pt-24 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% 0%, color-mix(in srgb, var(--color-primary) 10%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 backdrop-blur-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            Available for new opportunities
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground"
          style={{ fontFamily: "'Share Tech Mono', monospace" }}
        >
          Hello, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-balance font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {firstName}
          <span className="bg-gradient-to-r from-primary to-accent-2 bg-clip-text text-transparent">
            {' '}
            {lastName.join(' ')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-primary/80"
          style={{ fontFamily: "'Share Tech Mono', monospace" }}
        >
          Design · Development · Branding
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl text-balance px-2 text-base leading-relaxed text-muted-foreground sm:px-0 md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="group">
            <a href="#contact">
              Get in Touch
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#projects">
              <Code2 className="size-4" /> View My Work
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}