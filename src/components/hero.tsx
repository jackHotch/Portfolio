'use client'

import ComputerAnimation from '../data/computer-lottie.json'
import dynamic from 'next/dynamic'
import { MagicButton } from './ui/magic-button'
import { motion } from 'motion/react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'

const transition = {
  type: 'spring',
  damping: 10,
  stiffness: 30,
  ease: 'easeInOut',
}

const infoVariants = {
  initial: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: transition,
  },
}

const lottieVariants = {
  initial: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: transition,
  },
}

export const Hero = () => {
  const Lottie = dynamic(() => import('../components/lottie').then((mod) => mod.Lottie), {
    ssr: false,
  })
  const lottieOptions = {
    animationData: ComputerAnimation,
  }

  return (
    <BackgroundBeamsWithCollision>
      <div className='lg:mt-10 mt-20 lg:px-20 flex w-full flex-col-reverse flex-wrap items-center justify-center lg:flex-row lg:justify-between gap-20'>
        <motion.div
          variants={infoVariants}
          initial='initial'
          animate='visible'
          className='flex w-full lg:max-w-[55vw] flex-col gap-16 text-center lg:w-max lg:text-left'
        >
          <h1 className='text-4xl lg:text-7xl'>
            I'm Jack Hotchkiss, a{' '}
            <span className='text-accent-100'>Full Stack Engineer</span> Eager to Start my
            Career
          </h1>
          <p className='max-w-180 text-lg text-center lg:text-left'>
            Hi there! I'm Jack, I've recently graduated from Eastern Michigan University
            and I'm very excited to start my career in web devlepment. I have full stack
            experience through personal projects and an internship.
          </p>
        </motion.div>

        <motion.div variants={lottieVariants} initial='initial' animate='visible'>
          <Lottie options={lottieOptions} className='w-[80vw] md:w-[550px]' />
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}
