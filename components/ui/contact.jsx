'use client'
import React, { useState, useRef } from 'react'
import { Mail, MapPin, Github, Linkedin, Twitter, Send, ArrowUpRight } from 'lucide-react'
import { sendEmail } from '@/app/actions/sendEmail'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [, setShowToast] = useState(false)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await sendEmail(formData)
      setShowToast(true)
      setTimeout(() => {
        setShowToast(false)
      }, 3000)
      setFormData({ name: '', email: '', message: '' })
    } catch {
      console.error('Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  const socials = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Charan6924', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/charan-vardham-3bb187312/', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/cboyxxxx', label: 'Twitter' },
  ]

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-4 md:px-6">
      <motion.div
        style={{ opacity, y }}
        className="min-h-[80vh] md:min-h-screen flex flex-col justify-center py-16 md:py-24"
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <p className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
              Get in Touch
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-xl">
              Have a project in mind or just want to chat? Feel free to reach out.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-neutral-500 uppercase tracking-wider">Email</p>
                  <p className="text-white text-sm md:text-base">charan.vardham@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-neutral-500 uppercase tracking-wider">Location</p>
                  <p className="text-white text-sm md:text-base">Cleveland, OH</p>
                </div>
              </div>

              <div className="pt-4 md:pt-6">
                <p className="text-xs md:text-sm text-neutral-500 uppercase tracking-wider mb-4">Connect</p>
                <div className="flex gap-3">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="group flex items-center gap-2 px-3 md:px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
                    >
                      <span className="text-neutral-400 group-hover:text-white transition-colors">
                        {social.icon}
                      </span>
                      <span className="text-xs md:text-sm text-neutral-400 group-hover:text-white transition-colors hidden sm:inline">
                        {social.label}
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="text-xs md:text-sm text-neutral-400 mb-2 block">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 text-sm md:text-base text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs md:text-sm text-neutral-400 mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 text-sm md:text-base text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs md:text-sm text-neutral-400 mb-2 block">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 text-sm md:text-base text-white placeholder-neutral-600 resize-none focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-medium py-3 md:py-3.5 px-5 md:px-6 text-sm md:text-base hover:bg-neutral-200 transition-all duration-300 disabled:opacity-60 active:scale-[0.98]"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
