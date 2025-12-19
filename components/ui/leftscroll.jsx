import React from 'react'
import Link from 'next/link'


const LeftScroll = ({to = "#skills"}) => {
  return (
    <div className = 'absolute bottom-10 right-12 hidden lg:flex flex-col items-center gap-6 z-30'>
        <div className='flex flex-col gap-6'>
            <Link 
            href={to}
            className="text-gray-400 hover:text-teal-400 hover:-translate-y-1 transition-all duration-300"
            style={{ writingMode: 'vertical-rl' }}
          >
            Scroll Down
          </Link>
        </div>
        <div className="w-[1px] h-24 bg-gray-400/50"></div>
    </div>
  )
}

export default LeftScroll