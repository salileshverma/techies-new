'use client'
import { useEffect, useRef } from 'react'

export default function HeroBars() {
  const barsRef = useRef<HTMLDivElement[]>([])
  const heights = [45, 60, 75, 55, 88, 65, 95, 70]

  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (!bar) return
      setTimeout(() => {
        bar.style.transition = 'height 1s ease'
        bar.style.height = heights[i] + '%'
      }, i * 80)
    })
    const interval = setInterval(() => {
      barsRef.current.forEach(bar => {
        if (!bar) return
        bar.style.transition = 'height 1.4s ease'
        bar.style.height = (Math.random() * 60 + 30) + '%'
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mini-chart mb-3">
      {heights.map((h, i) => (
        <div
          key={i}
          className={`mc-bar${[2,4,6].includes(i) ? ' hi' : ''}`}
          style={{ height: '4px' }}
          ref={el => { if (el) barsRef.current[i] = el }}
        />
      ))}
    </div>
  )
}
