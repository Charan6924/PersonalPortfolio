import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'

const RightSocials = () => {
  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/charan6924', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/charan-vardham-3bb187312/', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: 'https://x.com/cboyxxxx', label: 'Twitter' },
    { icon: <Mail size={18} />, href: 'mailto:charan.vardham@gmail.com', label: 'Email' },
  ];
  return (
    <div className="fixed bottom-0 left-8 hidden lg:flex flex-col items-center gap-6 z-30">
      <div className="flex flex-col gap-5">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            className="text-neutral-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            aria-label={link.label}
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="w-[1px] h-24 bg-gradient-to-t from-transparent via-neutral-700 to-neutral-700"></div>
    </div>
  )
}

export default RightSocials
