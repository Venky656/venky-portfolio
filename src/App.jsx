import { ThemeProvider } from './ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Profiles from './components/Profiles'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FilmGrain from './components/FilmGrain'
import CustomCursor from './components/CustomCursor'
import Spotlight from './components/Spotlight'

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
          <About />
          <Education />
          <Skills />
          <Profiles />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}