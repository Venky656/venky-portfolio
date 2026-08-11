import { useEffect, useState } from 'react'

export default function LetterByLetter({ text }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setActive(true), 10)
    return () => clearTimeout(t)
  }, [])

  return (
    <span>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            opacity: active ? 1 : 0,
            transform: active
              ? 'translateX(0) translateY(0) rotate(0deg)'
              : 'translateX(20px) translateY(10px) rotate(20deg)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            transitionDelay: `${index * 0.02}s`,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  )
}
