'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                fixed top-0 w-full z-50 
                transition-all duration-300 ease-in-out
                ${isScrolled || isMobileMenuOpen ? 'bg-neutral-800 shadow-lg' : 'bg-transparent'}
            `}
        >
            <div className='flex items-center justify-between max-w-7xl mx-auto p-4 md:p-6 lg:px-12'>
                
                {/* LOGO */}
                <Link href='/'>
                    <img src='/C_logo.png' alt='Logo' className='h-8 md:h-10 scale-[1.5] md:scale-[1.8] w-auto transition-transform hover:scale-[1.6] md:hover:scale-[1.9]' />
                </Link>
                
                {/* DESKTOP MENU (Hidden on Mobile) */}
                <div className='hidden md:flex flex-grow justify-center gap-8 text-xl font-semibold'>
                    <Link href="#home" className="hover:text-teal-400 transition-colors">Home</Link>
                    <Link href="#skills" className="hover:text-teal-400 transition-colors">Skills</Link>
                    <Link href="#projects" className="hover:text-teal-400 transition-colors">Projects</Link>
                    <Link href="#contact" className="hover:text-teal-400 transition-colors">Contact</Link>
                </div>

                {/* MOBILE MENU BUTTON (Visible only on Mobile) */}
                <button 
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-neutral-800 border-t border-neutral-700 absolute w-full">
                    <div className="flex flex-col items-center gap-6 py-8 text-xl font-semibold">
                        <Link 
                            href="#home" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-teal-400 transition-colors"
                        >
                            Home
                        </Link>
                        <Link 
                            href="#skills" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-teal-400 transition-colors"
                        >
                            Skills
                        </Link>
                        <Link 
                            href="#projects" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-teal-400 transition-colors"
                        >
                            Projects
                        </Link>
                        <Link 
                            href="#contact" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-teal-400 transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar