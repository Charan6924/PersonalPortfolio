'use client'
import LeftScroll from './leftscroll'
import { SiPytorch, SiPython, SiPandas, SiNumpy, SiFastapi, SiMongodb, SiNextdotjs, SiLangchain } from "react-icons/si"
import { ExternalLink, Brain, MessageSquare, Eye, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'GPT-2',
    icon: <Brain className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />,
    description: 'Built a GPT-2 language model from scratch using PyTorch, implementing multi-head attention, layer normalization, and autoregressive text generation.',
    href: 'https://github.com/Charan6924/GPT2',
    tech: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'Pytorch', icon: <SiPytorch /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'Numpy', icon: <SiNumpy /> },
    ]
  },
  {
    title: 'RAG Chatbot',
    icon: <MessageSquare className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />,
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
    title: 'Vision Transformer',
    icon: <Eye className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />,
    description: 'Implemented a Vision Transformer (ViT) from scratch for image classification, using patch embeddings and self-attention mechanisms.',
    href: 'https://github.com/Charan6924/VisionTransformer',
    tech: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'Pytorch', icon: <SiPytorch /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'Numpy', icon: <SiNumpy /> },
    ]
  },
  {
    title: 'ESRGAN',
    icon: <Sparkles className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />,
    description: 'SRGAN-based super-resolution model for upscaling images with perceptual quality optimization using adversarial training.',
    href: 'https://github.com/Charan6924/SuperResolution',
    tech: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'Pytorch', icon: <SiPytorch /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'Numpy', icon: <SiNumpy /> },
    ]
  },
]

const Projects = () => {
  return (
    <div className="relative">
      <div className="hidden lg:block">
        <LeftScroll to='#contact'/>
      </div>

      <section className="min-h-[50vh] md:min-h-[60vh] flex items-center justify-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest mb-4">
            What I&apos;ve built
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-neutral-400 text-base md:text-lg max-w-md mx-auto">
            Scroll to explore my work
          </p>
        </motion.div>
      </section>

      {projects.map((project, index) => (
        <section
          key={index}
          className="min-h-[50vh] md:min-h-[70vh] flex items-center justify-center px-4 md:px-6 py-12 md:py-16"
        >
          <div className="max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest">
                  0{index + 1} / 0{projects.length}
                </p>
                <a
                  href={project.href}
                  target="_blank"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <span className="text-sm">View on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-white">
                  {project.icon}
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white">
                  {project.title}
                </h2>
              </div>

              <p className="text-neutral-400 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.tech.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl bg-white/[0.03] border border-white/10"
                  >
                    <span className="text-base md:text-lg text-neutral-400">{item.icon}</span>
                    <span className="text-xs md:text-sm text-neutral-400">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Projects
