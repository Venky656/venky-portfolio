import { Suspense, lazy } from 'react'
import { ThemeProvider } from './ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FilmGrain from './components/FilmGrain'
import CustomCursor from './components/CustomCursor'
import Spotlight from './components/Spotlight'

const About = lazy(() => import('./components/About'))
const Education = lazy(() => import('./components/Education'))
const Skills = lazy(() => import('./components/Skills'))
const Profiles = lazy(() => import('./components/Profiles'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return <div className="py-24" aria-hidden="true" />
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground lg:cursor-none">
        <FilmGrain />
        <Spotlight />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <About />
            <Education />
            <Skills />
            <Profiles />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  )
}