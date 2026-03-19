'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiPython, SiPytorch, SiTensorflow, SiReact, SiNextdotjs, SiTypescript, SiFastapi, SiMongodb, SiDocker, SiGit, SiAmazonwebservices } from 'react-icons/si'
import RightSocials from './rightsocials'
import LeftScroll from './leftscroll'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section className='min-h-screen w-full flex flex-col justify-center items-center pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-x-hidden'>

        <div className="hidden lg:block">
            <RightSocials/>
            <LeftScroll to='#skills'/>
        </div>

        <div className="w-full max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-0">

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6"
            >
                <span className="text-white">Hi, I&apos;m </span>
                <span className="text-white">Charan</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-neutral-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
            >
                A passionate developer focused on Machine Learning, AI, and building
                impactful software. Always learning, always building.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-20"
            >
                <Link
                    href="https://github.com/Charan6924/Resume/blob/main/Charan_Vardham_2028.pdf"
                    className="group inline-flex items-center gap-2 bg-white text-black py-3 sm:py-3.5 px-6 sm:px-8 rounded-full font-medium hover:bg-neutral-200 transition-all duration-300 text-sm sm:text-base"
                    target="_blank"
                >
                    View Resume
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                    href="#projects"
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-white py-3 sm:py-3.5 px-6 sm:px-8 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-sm sm:text-base"
                >
                    See My Work
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-8 border-t border-white/[0.06] w-full max-w-3xl mx-auto"
            >
                <p className="text-xs text-neutral-600 uppercase tracking-widest mb-4 sm:mb-6">Tech I work with</p>
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
                    <div className="flex animate-marquee">
                        <div className="flex items-center gap-6 sm:gap-12 px-3 sm:px-6 shrink-0">
                            <SiPython className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiPytorch className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiTensorflow className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiReact className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiNextdotjs className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiTypescript className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiFastapi className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiMongodb className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiDocker className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiGit className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiAmazonwebservices className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                        </div>
                        <div className="flex items-center gap-6 sm:gap-12 px-3 sm:px-6 shrink-0">
                            <SiPython className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiPytorch className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiTensorflow className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiReact className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiNextdotjs className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiTypescript className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiFastapi className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiMongodb className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiDocker className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiGit className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                            <SiAmazonwebservices className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

    </section>
  )
}

export default Home
