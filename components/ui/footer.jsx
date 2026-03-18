import React from 'react'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  return (
    <div className='border-t border-white/5'>
      <div className='max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
        <Link href='/' className='text-lg font-bold tracking-tight text-white hover:opacity-70 transition-opacity duration-300'>
          CV<span className='text-neutral-500'>.</span>
        </Link>
        <p className='text-neutral-500 text-sm'>
          &copy; 2025 Charan Vardham. Built with Next.js
        </p>
        <Link
          href='#home'
          className='group flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors'
        >
          Back to top
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
