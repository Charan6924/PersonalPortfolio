'use client'
import React from 'react'
import LeftScroll from './leftscroll'
import { GiCycle, GiArtificialIntelligence } from "react-icons/gi";
import { SiPytorch, SiPython, SiPandas, SiNumpy, SiFastapi, SiMongodb, SiNextdotjs, SiLangchain } from "react-icons/si";
import { TiWeatherCloudy } from "react-icons/ti";
import { PiWaveSineFill } from "react-icons/pi";
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'ShakespeareGPT',
      icon: <GiCycle className="w-6 h-6" />,
      description: 'Implemented a generative pretrained transformer (GPT) model using PyTorch that is trained on the life works of Shakespeare.',
      href: 'https://github.com/Charan6924/ShakespeareGPT',
      tech: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'Pytorch', icon: <SiPytorch /> },
        { name: 'Pandas', icon: <SiPandas /> },
        { name: 'Numpy', icon: <SiNumpy /> },
      ]
    },
    {
      title: 'RAG Chatbot',
      icon: <GiArtificialIntelligence className="w-6 h-6" />,
      description: 'A Retrieval-Augmented Generation (RAG) Chatbot with FastAPI backend, MongoDB chat history, and Next.js frontend.',
      href: 'https://github.com/Charan6924/RAG',
      tech: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'Next.JS', icon: <SiNextdotjs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'LangChain', icon: <SiLangchain /> },
      ]
    },
    {
      title: 'Spectrum To Kernel',
      icon: <PiWaveSineFill className="w-6 h-6" />,
      description: 'Deep learning model that identifies and transforms CT image reconstruction kernels using neural networks.',
      href: 'https://github.com/Charan6924/SpectrumToKernel',
      tech: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'Pytorch', icon: <SiPytorch /> },
        { name: 'Pandas', icon: <SiPandas /> },
        { name: 'Numpy', icon: <SiNumpy /> },
      ]
    },
    {
      title: 'ESRGAN Super-Resolution',
      icon: <TiWeatherCloudy className="w-6 h-6" />,
      description: 'SRGAN-based super-resolution model for upscaling images with perceptual quality optimization using adversarial training.',
      href: 'https://github.com/Charan6924/SuperResolution',
      tech: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'Pytorch', icon: <SiPytorch /> },
        { name: 'Pandas', icon: <SiPandas /> },
        { name: 'Numpy', icon: <SiNumpy /> },
      ]
    },
  ];

  return (
    <div className='py-24 px-6 relative overflow-hidden'>

      <div className="hidden lg:block">
        <LeftScroll to='#contact'/>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            A selection of projects I&apos;ve built to explore new technologies
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className='group relative flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300'
              href={project.href}
              target='_blank'
            >
              <div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <ExternalLink className='w-5 h-5 text-white' />
              </div>

              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-all duration-300'>
                  {project.icon}
                </div>
                <h3 className='text-xl font-semibold text-white'>{project.title}</h3>
              </div>

              <p className='text-neutral-400 text-sm leading-relaxed mb-6 flex-grow'>
                {project.description}
              </p>

              <div className='flex flex-wrap gap-2 pt-4 border-t border-white/5'>
                {project.tech.map((item, idx) => (
                  <div
                    key={idx}
                    className='flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] text-neutral-500 group-hover:text-neutral-300 transition-colors'
                  >
                    <span className='text-sm'>{item.icon}</span>
                    <span className='text-xs'>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
