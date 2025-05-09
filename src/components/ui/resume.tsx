import { TbLocationFilled } from 'react-icons/tb'
import { motion, useAnimate } from 'motion/react'

export const Resume = () => {
  const [scope, animate] = useAnimate()

  const handleOpenPdf = () => {
    const pdfUrl = '/jack_hotchkiss_resume.pdf' // could also be an external URL
    window.open(pdfUrl, '_blank')
  }

  const handleHover = () => {
    animate(scope.current, { y: -10, scale: 1.05 })
  }

  return (
    <motion.button
      whileHover="hovered"
      onClick={handleOpenPdf}
      className="border-accent-100 flex-center absolute top-4 right-18 z-10 gap-2 rounded-xl border-1 bg-slate-400/15 px-5 py-3"
    >
      Resume
      <motion.span variants={{ hovered: { y: -2, scale: 1.2 } }}>
        <TbLocationFilled className="text-accent-100" />
      </motion.span>
    </motion.button>
  )
}
