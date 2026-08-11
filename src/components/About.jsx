import { Card, CardContent } from '@/components/ui/card'
import { TerminalSquare, Rocket, Palette, Code2, PenTool } from 'lucide-react'
import Reveal from './Reveal'
import { about } from '../data/portfolioData'

const mono = { fontFamily: "'Share Tech Mono', monospace" }
const orbitron = { fontFamily: "'Orbitron', sans-serif" }

const cardMeta = [
  {
    icon: TerminalSquare,
    num: '01',
    title: 'Who I am',
  },
  {
    icon: Rocket,
    num: '02',
    title: 'What drives me',
  },
]

const focusRow = [
  { icon: Palette, label: 'Design', desc: 'Sharp, focused interfaces' },
  { icon: Code2, label: 'Development', desc: 'Every layer, built by me' },
  { icon: PenTool, label: 'Branding', desc: 'Identity that holds up live' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      {/* Heading block */}
      <Reveal>
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-10 bg-primary/60" />
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            01. About Me
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2
            className="font-heading text-3xl font-bold md:text-5xl"
            style={orbitron}
          >
            Who am I?
          </h2>
          <p className="mb-1 text-sm uppercase tracking-[0.2em] text-muted-foreground/60" style={mono}>
            Design · Development · Branding
          </p>
        </div>
      </Reveal>

      {/* Bio cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {about.bio.map((paragraph, i) => {
          const meta = cardMeta[i] || cardMeta[0]
          const Icon = meta.icon
          return (
            <Reveal key={paragraph.slice(0, 20)} delay={i * 0.12} variant={i === 0 ? 'slideLeft' : 'slideRight'}>
              <Card className="group relative h-full overflow-hidden p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 md:p-8">
                {/* accent top line on hover */}
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-primary to-primary/30 transition-transform duration-500 group-hover:scale-x-100" />

                {/* corner glow */}
                <span
                  className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                  style={{ background: 'radial-gradient(circle, var(--color-primary), transparent 70%)' }}
                />

                <CardContent className="relative z-10 p-0">
                  {/* card header */}
                  <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                    <span className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/80" style={mono}>
                        {meta.title}
                      </h3>
                    </span>
                    <span className="text-xs font-bold tracking-widest text-primary/70" style={mono}>
                      {meta.num}
                    </span>
                  </div>

                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg" style={mono}>
                    {paragraph}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          )
        })}
      </div>

      {/* Focus strip */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {focusRow.map((f, i) => {
          const Icon = f.icon
          return (
            <Reveal key={f.label} delay={0.2 + i * 0.1} variant="fade">
              <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{f.label}</p>
                  <p className="text-xs text-muted-foreground" style={mono}>{f.desc}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}