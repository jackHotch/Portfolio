'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { ColourfulText } from './ui/colorful-text'
import { usePathname } from 'next/navigation'

export const EntranceAnimation = () => {
  const [textVisible, setTextVisible] = useState(false)
  const [visible, setVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true)
    }, 500)

    setTimeout(() => {
      setVisible(false)
    }, 6000)
  })

  if (pathname !== '/') return null

  if (visible == false) return null

  return (
    <motion.div
      animate={{ y: '100vh', transition: { delay: 6 } }}
      className="flex-center absolute z-[1000] h-screen w-screen bg-transparent text-5xl font-extrabold text-stone-950 lg:text-9xl"
    >
      <motion.div
        animate={{
          y: '100vh',
          transition: { duration: 1, delay: 3, ease: 'easeInOut' },
        }}
        className="h-screen w-[20vw] bg-stone-950"
      />
      <motion.div
        animate={{
          y: '100vh',
          transition: { duration: 1, delay: 3.2, ease: 'easeInOut' },
        }}
        className="h-screen w-[20vw] bg-stone-950"
      />
      <motion.div
        animate={{
          y: '100vh',
          transition: { duration: 1, delay: 3.4, ease: 'easeInOut' },
        }}
        className="h-screen w-[20vw] bg-stone-950"
      />
      <motion.div
        animate={{
          y: '100vh',
          transition: { duration: 1, delay: 3.6, ease: 'easeInOut' },
        }}
        className="h-screen w-[20vw] bg-stone-950"
      />
      <motion.div
        animate={{
          y: '100vh',
          transition: { duration: 1, delay: 3.8, ease: 'easeInOut' },
        }}
        className="h-screen w-[20vw] bg-stone-950"
      />
      {textVisible && (
        <motion.div
          animate={{ opacity: 0, transition: { delay: 2 } }}
          className="flex-center absolute inset-0 bg-transparent"
        >
          <ColourfulText>Jack Hotchkiss</ColourfulText>
        </motion.div>
      )}
    </motion.div>
  )
}
