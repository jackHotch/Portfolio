export const Logo = () => {
  return (
    <img
      src={'/logo.png'}
      className='absolute top-4 left-18 z-10 rounded-xl bg-slate-400/15 w-12'
      onClick={() => console.log('hi')}
    />
  )
}
