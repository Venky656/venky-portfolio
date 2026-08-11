import Reveal from './Reveal'
import { skills } from '../data/portfolioData'

function SkillCard({ skill, delay }) {
  return (
    <Reveal variant="elastic" delay={delay} className="h-full">
      <div className="group h-full rounded-xl border border-border border-t-4 border-t-primary bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-3xl transition-transform duration-500 group-hover:scale-110">{skill.icon}</span>
          <h3 className="font-heading text-lg font-semibold">{skill.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item) => (
            <span
              key={item}
              className="cursor-default rounded-full bg-muted px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-125 hover:bg-primary/20 hover:text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-primary/60" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            03. Skills
          </p>
        </div>
        <h2 className="mb-12 text-3xl font-bold md:text-5xl" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          What I Work With
        </h2>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((skill, i) => (
          <SkillCard key={skill.title} skill={skill} delay={(i % 2) * 0.15} />
        ))}
      </div>
    </section>
  )
}