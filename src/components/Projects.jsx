import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import LetterByLetter from './LetterByLetter'
import ScrambleText from './ScrambleText'
import { projects } from '../data/portfolioData'

const mobileCardVariants = {
  initial: { y: 200, rotate: -20, opacity: 0 },
  animate: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
}

const GithubGit = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.25.82-.56v-2.18c-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.08-.73.09-.71.09-.71 1.2.08 1.84 1.21 1.84 1.21 1.07 1.79 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.24-3.17-.13-.3-.54-1.51.11-3.15 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 6.01 0c2.29-1.53 3.3-1.21 3.3-1.21.65 1.64.24 2.85.12 3.15.77.83 1.24 1.88 1.24 3.17 0 4.54-2.81 5.54-5.49 5.83.43.37.82 1.1.82 2.22v3.29c0 .31.21.67.82.56A12.02 12.02 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
  </svg>
)

function PreviewCard({ project }) {
  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary bg-gray-dark text-primary"
      style={{
        boxShadow: '0 0 30px rgba(2, 6, 23, 0.5)',
      }}
    >
      <div className="relative z-10 flex h-12 w-[90%] items-center justify-between self-center mt-5">
        <ScrambleText text={project?.year ?? ''} frames={20} />
        <ScrambleText text={project?.title ?? ''} frames={20} />
      </div>

      <div className="relative z-10 my-5 flex w-[90%] flex-1 self-center overflow-hidden rounded-3xl border-2 border-gray-semi"
        style={{ minHeight: 0 }}
      >
        {project?.image ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={project.slug}
              src={project.image}
              alt={`${project.title} preview`}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </AnimatePresence>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground/30">
            <span className="text-5xl">✨</span>
            <span className="text-[0.7rem] tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}>
              Hover a project
            </span>
          </div>
        )}
      </div>

      <div className="relative z-10 my-5 flex w-[90%] flex-wrap gap-3 self-center">
        <AnimatePresence>
          {project?.tags.map((tag, i) => (
            <motion.span
              key={`${project.slug}-${tag}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: 'ease' }}
              className="rounded-full px-3 py-1 text-sm font-bold tracking-widest text-primary"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                background: 'rgba(108, 52, 204, 0.31)',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Projects() {
  const [hovered, setHovered] = useState(null)
  const [cardIn, setCardIn] = useState(false)
  const hoveredProject = projects.find((p) => p.slug === hovered) || null

  const listRef = useRef(null)
  const cardOuterRef = useRef(null)
  const [travel, setTravel] = useState(0)

  useEffect(() => {
    const measure = () => {
      const list = listRef.current
      const card = cardOuterRef.current
      if (!list || !card) return
      const diff = list.offsetHeight - card.offsetHeight
      setTravel(Math.max(0, diff))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 30%', 'end 80%'],
  })
  const cardY = useTransform(scrollYProgress, [0, 1], [0, travel])

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 my-60 lg:my-96">
      <Reveal>
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-primary/60" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            05. Projects
          </p>
        </div>
        <div className="flex flex-col gap-5 md:items-start lg:mt-10">
          <h2 className="text-[2.5rem] font-bold uppercase md:text-[4rem]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Projects
          </h2>
          <p className="w-full max-w-xl text-sm text-muted-foreground md:text-xl lg:text-[1.3rem]"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            Throughout my journey as a developer, I've worked on a variety of projects that demonstrate
            my technical skills and problem-solving abilities.
          </p>
        </div>
      </Reveal>

      {/* Desktop — two-column interactive layout */}
      <div className="mt-40 hidden items-start justify-between gap-x-20 2xl:gap-x-28 xl:flex">
        <div className="relative w-1/2 self-stretch">
          <motion.div ref={cardOuterRef} className="sticky top-28 w-full" style={{ y: cardY }}>
            <motion.div
              initial={{ x: -1500, y: 900, rotate: -30, opacity: 1 }}
              animate={cardIn
                ? { x: 0, y: 0, rotate: 0, opacity: 1 }
                : { x: -1500, y: 900, rotate: -30, opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-[35rem] w-full overflow-visible"
            >
              <PreviewCard project={hoveredProject} />
            </motion.div>
          </motion.div>
        </div>

        <div
          ref={listRef}
          data-project-hover
          className="flex w-1/2 flex-col"
          onMouseEnter={() => setCardIn(true)}
          onMouseLeave={() => setCardIn(false)}
        >
          {projects.map((project) => {
            const isHovered = hovered === project.slug
            const isLast = project === projects[projects.length - 1]
            return (
              <div key={project.slug}
                onMouseEnter={() => setHovered(project.slug)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="group relative z-30 block w-full transition-all duration-300"
                  style={{ height: isHovered ? '6.55rem' : '4.55rem' }}>
                  <a href={project.live || project.github || undefined}
                    target={(project.live || project.github) ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="absolute inset-0">
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      title="Open GitHub repository"
                      className="absolute right-[-10%] top-4 z-20 h-60 w-auto scale-50 text-primary opacity-0 transition-all duration-[0.8s] group-hover:scale-100 group-hover:opacity-10 hover:!opacity-30">
                      <GithubGit className="h-full w-auto" />
                    </a>
                  )}
                  <div className="relative z-10 flex h-full w-full flex-col justify-between pointer-events-none">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-4 pointer-events-none">
                        <h4 className={`text-nowrap text-[1.5rem] leading-8 font-bold tracking-wider py-5 transition-all duration-500 ${
                          isHovered ? 'text-primary tracking-widest' : 'text-muted-foreground group-hover:text-primary group-hover:tracking-widest'
                        }`}>
                          {project.title}
                        </h4>
                        <motion.span initial={{ scale: 0 }}
                          animate={isHovered ? { scale: 1 } : { scale: 0 }}
                          transition={{ duration: 0.3, ease: 'ease' }} className="mb-1 text-primary">
                          <ExternalLink className="size-6" />
                        </motion.span>
                      </div>
                      <span className="text-sm text-muted-foreground/55" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                        {project.linkType}
                      </span>
                    </div>
                    <AnimatePresence mode="wait">
                      {isHovered && (
                        <motion.div key={`desc-${project.slug}`}
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                          className="-mt-3 overflow-hidden">
                          <p className="pb-5 text-sm text-muted-foreground" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                            <LetterByLetter text={project.description} />
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {!isLast && <hr className="w-full border-border" />}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="mt-10 grid gap-10 xl:hidden md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            variants={mobileCardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }}
            className="group flex w-full flex-col items-center rounded-3xl border border-primary bg-gray-dark text-primary shadow-around"
          >
            <div className="mt-5 flex h-12 w-[90%] items-center justify-between">
              <span className="text-sm font-bold tracking-widest text-primary" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                {project.year}
              </span>
              <span className="text-sm font-bold tracking-widest text-primary" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                {project.title}
              </span>
            </div>
            <div className="relative my-5 h-80 w-[90%] overflow-hidden rounded-3xl">
              {project.image ? (
                <img src={project.image} alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              ) : (
                <div className={`flex h-full items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                  <span className="text-5xl">{project.emoji}</span>
                </div>
              )}
            </div>
            <p className="w-[86%] text-gray-light" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
              {project.description}
            </p>
            <div className="my-5 flex w-[86%] flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: "'Share Tech Mono', monospace" }}
                  className="rounded-full bg-primary-transparent px-2 py-1.5 text-xs font-bold tracking-widest text-primary">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mb-7 mt-4 flex w-[90%] items-center justify-end">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-primary p-3 text-white transition-transform duration-75 focus:scale-90">
                  Visit {project.linkType} <ExternalLink className="size-5" />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-primary/50 p-3 text-primary transition-transform duration-75 focus:scale-90">
                  <GithubGit className="size-5" /> GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}