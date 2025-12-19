import React from 'react'
import { Code, Cpu, Globe, Terminal } from 'lucide-react'
import { SiPython, SiRstudioide, SiTypescript, SiPytorch, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiHtml5, SiGit, SiGithub, SiDocker, SiLinux, SiVercel } from 'react-icons/si'
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import LeftScroll from './leftscroll'

const Skills = () => {
  const skillsData = [
  {
    category: "Languages",
    icon: <Code className="w-6 h-6 text-teal-400" />,
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
    icon: <Cpu className="w-6 h-6 text-teal-400" />,
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
    icon: <Globe className="w-6 h-6 text-teal-400" />,
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
    icon: <Terminal className="w-6 h-6 text-teal-400" />,
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
    // Changed: pt-24 (clear navbar), p-6 (mobile padding), lg:px-36 (desktop padding)
    <div className='min-h-screen pt-24 flex flex-col items-start max-w-7xl mx-auto p-6 lg:px-36 relative overflow-hidden'>
      
      {/* Changed: Hide Sidebar on mobile */}
      <div className="hidden lg:block">
        <LeftScroll to='#projects'/>
      </div>

      {/* Changed: Responsive text size */}
      <h1 className='text-4xl md:text-6xl font-bold text-left mb-10 text-white'>Skills</h1>
      
      {/* Changed: Grid stack on mobile (cols-1), side-by-side on desktop (cols-2) */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
        {skillsData.map((skillCategory, index) => (
          <div key={index} className='p-6 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors h-full'>
            <div className='flex flex-col gap-6 mb-2'>
              <div className='flex items-center gap-3'>
                {skillCategory.icon}
                <h3 className='text-white text-xl font-bold'>{skillCategory.category}</h3>
              </div>

              {/* Changed: Added flex-wrap to prevent overflow on small screens */}
              <div className="flex flex-wrap gap-6 mt-2">
                        {skillCategory.items.map((item, idx) => (
                            <div key={idx} className="group flex flex-col items-center gap-3">
                                <div className="text-2xl text-gray-400 group-hover:text-teal-400 transition-colors transform group-hover:scale-110 duration-200">
                                    {item.icon}
                                </div>
                                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
            </div>
          </div>
        ))}
      </div>
        
        {/* Changed: Adjusted margin top for better spacing on mobile */}
        <div className="mt-12 flex items-center gap-3 p-3 px-5 rounded-full bg-teal-400/5 border border-teal-400/10 max-w-fit">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
        </span>
        <p className="text-xs font-medium text-teal-200 tracking-wide">
          CURRENTLY LEARNING: <span className="text-white">Rust and System Design</span>
        </p>
</div>
    </div>
  );
}
export default Skills