import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Home from '@/components/ui/home'
import Skills from '@/components/ui/skills'
import Projects from '@/components/ui/projects'
import Footer from '@/components/ui/footer'
import Contact from '@/components/ui/contact'

const page = () => {
  return (
    <div className='bg-neutral-800 text-white '>
        <Navbar/>
        <section id = 'home' className='scroll-mt-24'><Home/></section>
        <section id = 'skills' className='scroll-mt-24'><Skills/></section>
        <section id = 'projects' className='scroll-mt-24'><Projects/></section>
        <section id = 'contact' className='scroll-mt-24'><Contact/></section>
        <Footer/>
    </div>
  )
}

export default page