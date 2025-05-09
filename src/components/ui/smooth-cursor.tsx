'use client'

import { useState, useEffect, useRef } from 'react'

export default function SmoothCursor() {
  const mousePosition = useRef({ x: 0, y: 0 })

  const dotPosition = useRef({ x: 0, y: 0 })
  const borderDotPosition = useRef({ x: 0, y: 0 })

  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  })
  const [isHovering, setIsHovering] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [windowHovering, setWindowHovering] = useState(false)

  const DOT_SMOOTHNESS = 0.2
  const BORDER_DOT_SMOOTHNESS = 0.1

  useEffect(() => {
    setIsClient(true)

    const handleMouseEnterWindow = () => {
      setWindowHovering(true)
    }

    const handleMouseLeaveWindow = () => {
      setWindowHovering(false)
    }

    document.addEventListener('mouseover', handleMouseEnterWindow)
    document.addEventListener('mouseout', handleMouseLeaveWindow)

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMouseMove)

    const interactiveElements = document.querySelectorAll(
      'a, button, img, input, textarea, select'
    )
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor
      }

      dotPosition.current.x = mousePosition.current.x
      dotPosition.current.y = mousePosition.current.y

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS
      )
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS
      )

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: {
          x: borderDotPosition.current.x,
          y: borderDotPosition.current.y,
        },
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseEnterWindow)
      document.removeEventListener('mouseout', handleMouseLeaveWindow)

      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })

      cancelAnimationFrame(animationId)
    }
  }, [])

  if (typeof window === 'undefined') return null

  if (!isClient) return null

  return (
    windowHovering && (
      <div className="pointer-events-none fixed inset-0 z-50">
        <div
          className="bg-accent-100 absolute rounded-full"
          style={{
            width: isHovering ? '12px' : '8px',
            height: isHovering ? '12px' : '8px',
            transform: 'translate(-50%, -50%)',
            left: `${renderPos.dot.x}px`,
            top: `${renderPos.dot.y}px`,
            transition: 'width 0.3s, height 0.3s',
          }}
        />

        <div
          className="border-accent-100 absolute rounded-full border"
          style={{
            width: isHovering ? '12px' : '28px',
            height: isHovering ? '12px' : '28px',
            // width: '28px',
            // height: '28px',
            transform: 'translate(-50%, -50%)',
            left: `${renderPos.border.x}px`,
            top: `${renderPos.border.y}px`,
            transition: 'width 0.3s, height 0.3s',
          }}
        />
      </div>
    )
  )
}
