import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ACCENTS = [
  { name: 'purple', color: '#6c34cc' },
  { name: 'blue', color: '#32a1da' },
  { name: 'pink', color: '#ff3faf' },
  { name: 'red', color: '#dd314e' },
  { name: 'orange', color: '#dd5f31' },
  { name: 'yellow', color: '#e9c925' },
  { name: 'green', color: '#67d13d' },
  { name: 'cyan', color: '#31bedd' },
]

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('theme') || 'dark'
  })
  const [accent, setAccent] = useState(() => {
    if (typeof window === 'undefined') return 'blue'
    return localStorage.getItem('accent') || 'blue'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    root.setAttribute('data-accent', accent)
    localStorage.setItem('theme', theme)
    localStorage.setItem('accent', accent)
  }, [theme, accent])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  const setAccentTheme = (name) => setAccent(name)

  return (
    <ThemeContext.Provider value={{ theme, accent, toggleTheme, setAccentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)