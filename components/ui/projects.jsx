import React from 'react'
import LeftScroll from './leftscroll' 
import { GiCycle, GiArtificialIntelligence } from "react-icons/gi";
import { SiPytorch, SiPython, SiPandas, SiNumpy, SiFastapi, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiDocker } from "react-icons/si";
import { TiWeatherCloudy } from "react-icons/ti";
import { PiWaveSineFill } from "react-icons/pi";
import { SiLangchain } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    // Changed: Added pt-24 for navbar clearance, adjusted padding for mobile (p-6)
    <div className='min-h-screen flex flex-col items-start max-w-7xl mx-auto p-6 lg:px-36 pt-24 relative overflow-hidden'>
      
      {/* Changed: Hide LeftScroll on mobile to prevent overlap */}
      <div className="hidden lg:block">
        <LeftScroll to='#contact'/>
      </div>

      {/* Changed: Responsive text size (4xl on mobile, 6xl on desktop) */}
      <h1 className='text-4xl md:text-6xl font-bold text-left mb-4 text-white'>My Projects</h1>
      
      {/* Grid: Stacks 1 column on mobile, 2 on medium+ screens */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full pb-20'>
        
        {/* --- Project 1: CycleGAN --- */}
        <a className='relative group bg-neutral-900 flex flex-col border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors p-6 h-full'
          href='https://github.com/Charan6924/CycleGAN'
          target='_blank'>
            <div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <ExternalLink className='w-5 h-5 text-teal-400' />
          </div>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold text-white flex items-center gap-3'>
              <GiCycle className="w-8 h-8 text-teal-400 flex-shrink-0"/> 
              CycleGAN
            </h2>
          </div>
          <div className='flex-grow'>
            <p className='text-gray-400 mb-6 leading-relaxed'>
              Developed a CycleGAN model using PyTorch to convert images of horses to zebras and vice versa without requiring paired training data.
            </p>
          </div>
          
          {/* Added flex-wrap to prevent icons from spilling out on small screens */}
          <div className='flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800'>
            <div className='flex flex-col items-center gap-2'>
              <SiPython className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Python</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiPytorch className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Pytorch</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiPandas className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Pandas</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiNumpy className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Numpy</span>
            </div>
          </div>
        </a>
      
        {/* --- Project 2: RAG Chatbot --- */}
        <a className='relative group bg-neutral-900 flex flex-col border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors p-6 h-full'
        href='https://github.com/Charan6924/RAG'
        target='_blank'>
          <div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <ExternalLink className='w-5 h-5 text-teal-400' />
          </div>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold text-white flex items-center gap-3'>
              <GiArtificialIntelligence className="w-8 h-8 text-teal-400 flex-shrink-0"/>
              RAG Chatbot
            </h2>
          </div>
          <div className='flex-grow'>
            <p className='text-gray-400 mb-6 leading-relaxed'>
              A Retrieval-Augmented Generation (RAG) Chatbot. It uses a FastAPI backend, a MongoDB-integrated chat history, and a Next.js frontend styled using TailwindCSS.
            </p>
          </div>
          
          <div className='flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800'>
            <div className='flex flex-col items-center gap-2'>
              <SiPython className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Python</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiFastapi className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>FastAPI</span>
            </div>
             <div className='flex flex-col items-center gap-2'>
              <SiNextdotjs className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Next.JS</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiMongodb className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>MongoDB</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiLangchain className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>LangChain</span>
            </div>
          </div>
        </a>

        {/* --- Project 3: Spectrum To Kernel --- */}
        <a className='relative group bg-neutral-900 flex flex-col border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors p-6 h-full'
          href='https://github.com/Charan6924/SpectrumToKernel'
          target='_blank'>
            <div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <ExternalLink className='w-5 h-5 text-teal-400' />
          </div>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold text-white flex items-center gap-3'>
              <PiWaveSineFill className='h-8 w-8 text-teal-400 flex-shrink-0'/>
              Spectrum To Kernel
            </h2>
          </div>
          <div className='flex-grow'>
            <p className='text-gray-400 mb-6 leading-relaxed'>
              Developed a deep learning model that identifies the reconstruction kernel of a CT image and transforms it into an image generated with a different kernel.
            </p>
          </div>
           <div className='flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800'>
            <div className='flex flex-col items-center gap-2'>
              <SiPython className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Python</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiPytorch className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Pytorch</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiPandas className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Pandas</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiNumpy className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Numpy</span>
            </div>
          </div>
        </a>

        {/* --- Project 4: Weather Agent --- */}
        <a className='relative group bg-neutral-900 flex flex-col border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors p-6 h-full'
        target='_blank'
          href='https://github.com/Charan6924/Weather-Agent'>
            <div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <ExternalLink className='w-5 h-5 text-teal-400' />
          </div>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold text-white flex items-center gap-3'>
              <TiWeatherCloudy className='w-8 h-8 text-teal-400 flex-shrink-0'/>
              MCP Weather Agent
            </h2>
          </div>
          <div className='flex-grow'>
            <p className='text-gray-400 mb-6 leading-relaxed'>
              A conversational Weather Agent that uses MCP tools, OpenWeatherMap, and GPT-4o to intelligently fetch real-time weather data.
            </p>
          </div>
           <div className='flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800'>
            <div className='flex flex-col items-center gap-2'>
              <SiPython className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Python</span>
            </div>
             <div className='flex flex-col items-center gap-2'>
              <SiFastapi className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>FastAPI</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiOpenai className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>OpenAI API</span>
            </div>
          </div>
        </a>

      </div>
    </div>
  )
}

export default Projects