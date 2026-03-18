'use client'
import React from 'react'
import { Code, Cpu, Globe, Terminal } from 'lucide-react'
import { SiPython, SiRstudioide, SiTypescript, SiPytorch, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiHtml5, SiGit, SiGithub, SiDocker, SiLinux, SiVercel } from 'react-icons/si'
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import LeftScroll from './leftscroll'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillsData = [
  {
    category: "Languages",
    icon: <Code className="w-5 h-5" />,
    items: [
      { name: "Python", icon: <SiPython/> },
      { name: "JavaScript", icon: <IoLogoJavascript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "SQL", icon: <TbSql /> },
      { name: "R", icon: <SiRstudioide />},
      { name : "TypeScript", icon: <SiTypescript /> },
    ]
  },
  {
    category: "Machine Learning & AI",
    icon: <Cpu className="w-5 h-5" />,
    items: [
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
    ]
  },
  {
    category: "Web Development",
    icon: <Globe className="w-5 h-5" />,
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "HTML5", icon: <SiHtml5 /> },
    ]
  },
  {
    category: "Tools & DevOps",
    icon: <Terminal className="w-5 h-5" />,
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Vercel", icon: <SiVercel /> },
    ]
  }
];
  return (
    <div className='py-24 px-6 relative overflow-hidden'>

      <div className="hidden lg:block">
        <LeftScroll to='#projects'/>
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
            Skills & Technologies
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300'
            >
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white'>
                  {skillCategory.icon}
                </div>
                <h3 className='text-white text-lg font-semibold'>{skillCategory.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skillCategory.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <span className="text-lg text-neutral-400 group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.02] border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <p className="text-sm text-neutral-400">
              Currently learning <span className="text-white font-medium">NLP and Language Modelling</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Skills
