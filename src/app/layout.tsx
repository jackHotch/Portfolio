import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { EntranceAnimation } from '@/components/entrance-animation'
import SmoothCursor from '@/components/ui/smooth-cursor'
import { eurostile } from '../lib/fonts'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Jack's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${eurostile.variable} antialiased cursor-none`}>
        <EntranceAnimation />
        <SmoothCursor />
        {children}
      </body>
    </html>
  )
}
