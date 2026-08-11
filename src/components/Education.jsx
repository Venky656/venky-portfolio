import { useState, useEffect, useRef } from 'react'
import { GraduationCap, BookOpen, School } from 'lucide-react'
import Reveal from './Reveal'
import { education } from '../data/portfolioData'

const icons = [GraduationCap, BookOpen, School]

export default function Education() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const update = () => {
      const rect = el.getBoundingClientRect()
      const scrollable = el.offsetHeight
      const scrolled = window.innerHeight - rect.top
      const pct = Math.min(100, Math.max(0, (scrolled / scrollable) * 100))
      setProgress(pct)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section id="education" className="border-y border-border bg-muted/40 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-primary/60" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
              02. Education
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold md:text-5xl" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              My Journey
            </h2>
            <p className="mb-1 max-w-md text-right text-sm text-muted-foreground md:text-left" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
              From school to my current engineering degree.
            </p>
          </div>
        </Reveal>

        <div className="relative ml-3 border-l-2 border-primary/30 pl-7 sm:ml-4 sm:pl-8 md:ml-8">
          <div
            className="absolute -left-[3px] top-0 w-[3px] rounded-full bg-primary transition-[height] duration-200 ease-out"
            style={{ height: `${progress}%` }}
          />
          {education.map((edu, i) => {
            const Icon = icons[i] || GraduationCap
            return (
              <Reveal key={edu.degree} delay={i * 0.12} variant="slideRight">
                <div className="relative mb-10 last:mb-0">
                  <span className="absolute -left-[47px] flex size-9 items-center justify-center rounded-full border-2 border-primary bg-background text-primary sm:-left-[53px] sm:size-10">
                    <Icon className="size-4 sm:size-5" />
                  </span>
                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                    <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      {edu.years}
                    </span>
                    <h3 className="font-heading text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}