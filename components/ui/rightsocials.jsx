import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'

const RightSocials = () => {
    const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/charan6924', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/charan-vardham-3bb187312/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/cboyxxxx', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:charan.vardham@gmail.com', label: 'Email' },
  ];
  return (
    <div className="absolute bottom-10 left-12 hidden lg:flex flex-col items-center gap-6 z-30">
        <div className="flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.href} 
            target="_blank" 
            className="text-gray-400 hover:text-teal-400 hover:-translate-y-1 transition-all duration-300"
            aria-label={link.label}
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="w-[1px] h-24 bg-gray-400/50"></div>

    </div>
  )
}

export default RightSocials