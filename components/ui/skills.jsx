'use client'
import { SiPython, SiRstudioide, SiTypescript, SiPytorch, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiHtml5, SiGit, SiGithub, SiDocker, SiLinux, SiVercel } from 'react-icons/si'
import { IoLogoJavascript } from "react-icons/io"
import { FaJava } from "react-icons/fa"
import { TbSql } from "react-icons/tb"
import { VscVscode } from "react-icons/vsc"
import LeftScroll from './leftscroll'
import { motion } from 'framer-motion'

const categories = [
  {
    title: "Languages",
    subtitle: "The foundations I build with",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <IoLogoJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "SQL", icon: <TbSql /> },
      { name: "R", icon: <SiRstudioide /> },
    ],
  },
  {
    title: "Machine Learning",
    subtitle: "Where I focus most of my energy",
    skills: [
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
    ],
  },
  {
    title: "Web Development",
    subtitle: "Bringing ideas to the browser",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "HTML5", icon: <SiHtml5 /> },
    ],
  },
  {
    title: "Tools & DevOps",
    subtitle: "What keeps everything running",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
]

const Skills = () => {
  return (
    <div className="relative">
      <div className="hidden lg:block">
        <LeftScroll to='#projects'/>
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
            What I work with
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4">
            Skills
          </h1>
          <p className="text-neutral-400 text-base md:text-lg max-w-md mx-auto">
            Scroll to explore my technical toolkit
          </p>
        </motion.div>
      </section>

      {categories.map((category, index) => (
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
              <p className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest mb-4">
                0{index + 1} / 0{categories.length}
              </p>

              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-3 md:mb-4">
                {category.title}
              </h2>

              <p className="text-neutral-400 text-base md:text-xl mb-8 md:mb-10 max-w-xl">
                {category.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                    className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <span className="text-lg md:text-2xl text-white">{skill.icon}</span>
                    <span className="text-sm md:text-lg text-white">{skill.name}</span>
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

export default Skills
