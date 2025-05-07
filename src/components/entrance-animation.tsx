'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { ColourfulText } from './ui/colorful-text'

export const EntranceAnimation = () => {
  const [textVisible, setTextVisible] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true)
    }, 500)

    setTimeout(() => {
      setVisible(false)
    }, 6000)
  })

  if (visible == false) {
    return null
  }

  return (
    <motion.div
      animate={{ y: '100vh', transition: { delay: 6 } }}
      className='absolute z-[1000] w-screen bg-transparent h-screen text-stone-950 font-extrabold text-5xl lg:text-9xl flex-center'
    >
      <motion.div
        animate={{
          y: '100vh',
          transition: { duration: 1, delay: 3, ease: 'easeInOut' },
        }}
        className='bg-stone-950 h-screen w-[20vw]'
      />
      <motion.div
        animate={{
          y: '100vh',
          transition: { duration: 1, delay: 3.2, ease: 'easeInOut' },
        }}
        className='bg-stone-950 h-screen w-[20vw]'
      />
      <motion.div
        animate={{
          y: '100vh',
          transition: { duration: 1, delay: 3.4, ease: 'easeInOut' },
        }}
        className='bg-stone-950 h-screen w-[20vw]'
      />
      <motion.div
        animate={{
          y: '100vh',
          transition: { duration: 1, delay: 3.6, ease: 'easeInOut' },
        }}
        className='bg-stone-950 h-screen w-[20vw]'
      />
      <motion.div
        animate={{
          y: '100vh',
          transition: { duration: 1, delay: 3.8, ease: 'easeInOut' },
        }}
        className='bg-stone-950 h-screen w-[20vw]'
      />
      {textVisible && (
        <motion.div
          animate={{ opacity: 0, transition: { delay: 2 } }}
          className='absolute inset-0 flex-center bg-transparent'
        >
          <ColourfulText>Jack Hotchkiss</ColourfulText>
        </motion.div>
      )}
    </motion.div>
  )
}
