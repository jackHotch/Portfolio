'use client'

import { Hero } from '@/components/hero'
import { Logo } from '@/components/logo'
import { Navbar } from '@/components/navbar'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <main className='mx-auto flex flex-col gap-3 min-h-screen'>
      <Logo />
      <Navbar />
      <Hero />
      <Skills />
    </main>
  )
}
