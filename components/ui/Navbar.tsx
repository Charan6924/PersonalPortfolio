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

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav
            className={`
                fixed top-0 w-full z-50
                transition-all duration-500 ease-out
                ${isScrolled || isMobileMenuOpen
                    ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5'
                    : 'bg-transparent'}
            `}
        >
            <div className='flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5'>

                <Link href='/' className='text-xl font-bold tracking-tight text-white hover:opacity-70 transition-opacity duration-300'>
                    CV<span className='text-neutral-500'>.</span>
                </Link>

                <div className='hidden md:flex items-center gap-8'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="text-sm px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
                    >
                        Get in Touch
                    </Link>
                </div>

                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5 absolute w-full">
                    <div className="flex flex-col items-center gap-6 py-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-6 py-2.5 rounded-full bg-white text-black font-medium"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
