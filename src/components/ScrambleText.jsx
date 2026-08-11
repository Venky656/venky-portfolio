import { useEffect, useRef, useState } from 'react'

const chars =
  '!<>-_\\/[]{}—=+*^?#1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default function ScrambleText({ text = '', frames = 30 }) {
  const [displayed, setDisplayed] = useState([])
  const [final, setFinal] = useState(false)
  const frameRef = useRef(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!text) {
      setDisplayed([])
      return
    }
    const totalFrames = frames
    const scrambleDuration = 300
    const frameInterval = scrambleDuration / totalFrames
    const startTime = Date.now()
    let frame = 0
    setFinal(false)

    setDisplayed(
      Array.from(text).map(() => chars[Math.floor(Math.random() * chars.length)])
    )

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / scrambleDuration, 1)

      setDisplayed(
        Array.from(text).map((char, i) => {
          if (char === ' ') return '\u00A0'
          return elapsed < scrambleDuration &&
            frame % totalFrames < Math.floor(totalFrames * progress)
            ? chars[Math.floor(Math.random() * chars.length)]
            : text[i]
        })
      )

      frame++

      if (elapsed >= scrambleDuration) {
        clearInterval(timerRef.current)
        setDisplayed(Array.from(text))
        setFinal(true)
      }
    }, frameInterval)

    return () => clearInterval(timerRef.current)
  }, [text, frames])

  return (
    <span style={{ display: 'inline-block', fontFamily: "'Orbitron', sans-serif" }}>
      {displayed.map((letter, index) => (
        <span
          key={index}
          className={final ? 'text-foreground' : 'text-primary'}
          style={{
            display: 'inline-block',
            transition: 'color 0.5s ease, opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  )
}
