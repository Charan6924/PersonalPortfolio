'use client'
import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react'
import Link from 'next/link'


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }   
    }, []);
  return (
    <nav 
  className={`
    text-white 
    sticky top-0 z-50 
    transition-colors duration-300 ease-in-out
    ${isScrolled ? 'bg-neutral-800' : 'bg-transparent'}`}>
      <div className='flex items-center max-w-6xl mx-auto p-4 md:p-6'>
        <Link href = '/'>
            <img src='/C_logo.png' alt='Logo' className='h-10 scale-[1.8] w-auto'></img>
        </Link>
        
        <div className='flex-grow flex justify-center gap-8 text-xl font-semibold'>
            <Link href = "#home">Home</Link>
            <Link href = "#skills">Skills</Link>
            <Link href = "#projects">Projects</Link>
            <Link href = "#contact">Contact</Link>
        </div>

      </div>   
    </nav>
  )
}

export default Navbar