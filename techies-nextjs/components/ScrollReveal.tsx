'use client'
import { useEffect } from 'react'

/**
 * Replicates the IntersectionObserver fade-up scroll animation
 * from the original HTML. Attach className "scroll-reveal" to any element.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      '.svc-card, .exec-card, .case-card, .why-point, .stat-item'
    )

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).style.opacity = '1'
            ;(e.target as HTMLElement).style.transform = 'translateY(0)'
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(18px)'
      el.style.transition = `opacity .55s ease ${i * 0.05}s, transform .55s ease ${i * 0.05}s`
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  return null
}
