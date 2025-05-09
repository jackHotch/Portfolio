import { TbLocationFilled } from 'react-icons/tb'

export const Resume = () => {
  const handleOpenPdf = () => {
    const pdfUrl = '/jack_hotchkiss_resume.pdf' // could also be an external URL
    window.open(pdfUrl, '_blank')
  }
  return (
    <button
      onClick={handleOpenPdf}
      className='py-3 px-5 absolute top-4 right-18 z-10 border-1 border-accent-100 rounded-xl bg-slate-400/15 flex-center gap-2'
    >
      Resume
      <TbLocationFilled className='text-accent-100' />
    </button>
  )
}
