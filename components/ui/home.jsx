import React from 'react'
import Link from 'next/link'
import { GraduationCap, Brain, Rocket, ArrowRight, Mail } from 'lucide-react'
import RightSocials from './rightsocials'
import LeftScroll from './leftscroll'

const Home = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-start pt-24 pb-12 max-w-7xl mx-auto p-6 md:p-12 lg:px-36 relative overflow-hidden'>
        
        {/* HIDE SIDEBARS ON MOBILE: 
            These components usually sit on the edges. On mobile, they cover text.
            We use "hidden lg:block" to only show them on Large screens. 
        */}
        <div className="hidden lg:block">
            <RightSocials/>
            <LeftScroll to='#skills'/>
        </div>

        {/* RESPONSIVE TEXT SIZES:
            text-base on mobile -> text-xl on desktop 
        */}
        <p className="text-teal-400 font-mono text-base md:text-xl mb-4">
            Hello, my name is
        </p>

        {/* text-5xl on mobile -> text-8xl on desktop 
           Added tracking-tight for tighter letter spacing on big fonts
        */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            Charan Vardham.
        </h1>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-10 leading-tight">
             <span className="text-gray-200">I'm always looking to learn new things!</span>
        </h2>
        
        {/* CARDS GRID:
            grid-cols-1 (stack) on mobile -> grid-cols-3 on medium screens
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mb-10">

            <div className="p-6 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors group">
                <GraduationCap className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                <p className="text-gray-400 text-sm">Sophomore at Case Western Reserve University.</p>
                <p className="text-teal-400 text-sm mt-1">CS & Mathematics</p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors group">
                <Brain className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Interests</h3>
                <p className="text-gray-400 text-sm">Deeply passionate about Machine Learning, Deep Learning, and AI.</p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors group">
                <Rocket className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Always Learning</h3>
                <p className="text-gray-400 text-sm">I enjoy learning new skills and implementing them in real life!</p>
            </div>

        </div>

        {/* BUTTON CONTAINER:
            Flex column on tiny screens, Flex row on small screens and up.
        */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link 
                href="https://github.com/Charan6924/Resume/blob/main/Charan_Vardham_resume.pdf"
                className="inline-flex items-center gap-2 border border-white text-white py-3 px-8 rounded-xl transition-all hover:bg-white hover:text-black hover:scale-105 font-mono text-lg"
                target="_blank"
            >
                View Resume <ArrowRight size={20} />
            </Link>
            
            <Link 
                href="mailto:your.email@example.com" 
                className="flex items-center gap-2 text-gray-500 hover:text-teal-400 transition-colors font-mono text-sm group px-2 py-2">
                <Mail size={16} className="group-hover:animate-bounce" />
                <span>or email me directly</span>
            </Link>
        </div>

    </section>
  )
}

export default Home