import React from 'react'
import Link from 'next/link'

const LeftScroll = ({to = "#skills"}) => {
  return (
    <div className='fixed bottom-0 right-8 hidden lg:flex flex-col items-center gap-6 z-30'>
      <Link
        href={to}
        className="text-neutral-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300 text-xs tracking-widest"
        style={{ writingMode: 'vertical-rl' }}
      >
        SCROLL
      </Link>
      <div className="w-[1px] h-24 bg-gradient-to-t from-transparent via-neutral-700 to-neutral-700"></div>
    </div>
  )
}

export default LeftScroll
