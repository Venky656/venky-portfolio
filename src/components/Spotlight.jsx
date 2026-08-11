import { useEffect, useRef } from 'react'

export default function Spotlight() {
  const blobRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.innerWidth < 1024) return
    const blob = blobRef.current
    if (!blob) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let raf = 0

    const update = () => {
      const dx = targetX - currentX
      const dy = targetY - currentY
      currentX += dx * 0.05
      currentY += dy * 0.05
      blob.style.left = `${currentX}px`
      blob.style.top = `${currentY}px`
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        raf = requestAnimationFrame(update)
      } else {
        raf = 0
      }
    }

    const schedule = (x, y) => {
      targetX = x
      targetY = y
      if (!raf) raf = requestAnimationFrame(update)
    }

    const onMove = (e) => schedule(e.clientX, e.clientY + window.scrollY)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', () => schedule(targetX, targetY), { passive: true })

    const animateScale = (scale, duration, ease) => {
      blob.animate(
        [{ transform: `scale(${scale})` }],
        { duration, fill: 'forwards', easing: ease }
      )
    }

    const onPointerEnter = (e) => {
      e.stopPropagation()
      animateScale(0.5, 800, 'cubic-bezier(0.25, 1, 0.5, 1)')
    }
    const onPointerLeave = (e) => {
      e.stopPropagation()
      animateScale(1, 800, 'cubic-bezier(0.25, 1, 0.5, 1)')
    }
    const onClick = () => {
      const hovering = [...document.querySelectorAll('.hover-scale-effect')].some(
        (el) => el.matches(':hover')
      )
      if (hovering) return
      animateScale(0.9, 200, 'cubic-bezier(0.4, 0, 1, 1)')
      setTimeout(() => animateScale(1, 700, 'cubic-bezier(0.34, 1.56, 0.64, 1)'), 200)
    }

    const hoverEls = document.querySelectorAll('.hover-scale-effect')
    hoverEls.forEach((el) => {
      el.addEventListener('pointerenter', onPointerEnter)
      el.addEventListener('pointerleave', onPointerLeave)
    })
    document.addEventListener('click', onClick)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onMove)
      hoverEls.forEach((el) => {
        el.removeEventListener('pointerenter', onPointerEnter)
        el.removeEventListener('pointerleave', onPointerLeave)
      })
      document.removeEventListener('click', onClick)
    }
  }, [])

  return <div id="blob" ref={blobRef} className="hidden lg:block" />
}