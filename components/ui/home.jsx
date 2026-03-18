'use client'
import React from 'react'
import Link from 'next/link'
import { GraduationCap, Brain, Rocket, ArrowRight } from 'lucide-react'
import RightSocials from './rightsocials'
import LeftScroll from './leftscroll'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 relative overflow-hidden'>

        <div className="hidden lg:block">
            <RightSocials/>
            <LeftScroll to='#skills'/>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            >
                <span className="text-white">Hi, I&apos;m </span>
                <span className="text-white">Charan</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
                A passionate developer focused on Machine Learning, AI, and building
                impactful software. Always learning, always building.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            >
                <Link
                    href="https://github.com/Charan6924/Resume/blob/main/Charan_Vardham_2028.pdf"
                    className="group inline-flex items-center gap-2 bg-white text-black py-3.5 px-8 rounded-full font-medium hover:bg-neutral-200 transition-all duration-300"
                    target="_blank"
                >
                    View Resume
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                    href="#projects"
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-white py-3.5 px-8 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                >
                    See My Work
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
            >

                <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all duration-300">
                        <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Education</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">Sophomore at Case Western Reserve University</p>
                    <p className="text-white text-sm font-medium mt-2">CS & Mathematics</p>
                </div>

                <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all duration-300">
                        <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Interests</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">Passionate about Machine Learning, Deep Learning, and AI</p>
                </div>

                <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all duration-300">
                        <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Always Learning</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">Love building real-world projects with new technologies</p>
                </div>

            </motion.div>
        </div>

    </section>
  )
}

export default Home
