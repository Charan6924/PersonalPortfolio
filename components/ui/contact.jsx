'use client'
import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Send, ArrowUpRight } from 'lucide-react';
import { sendEmail } from '@/app/actions/sendEmail';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail(formData);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      console.error('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Charan6924', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/charan-vardham-3bb187312/', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/cboyxxxx', label: 'Twitter' },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Email</p>
                  <p className="text-white">charan.vardham@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Location</p>
                  <p className="text-white">Cleveland, OH</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-4">Connect</p>
              <div className="flex gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <span className="text-neutral-400 group-hover:text-white transition-colors">
                      {social.icon}
                    </span>
                    <span className="text-sm text-neutral-400 group-hover:text-white transition-colors hidden sm:inline">
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
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-neutral-400 mb-2 block">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-neutral-400 mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-neutral-400 mb-2 block">Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 text-white placeholder-neutral-600 resize-none focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-medium py-3.5 px-6 hover:bg-neutral-200 transition-all duration-300 disabled:opacity-60 active:scale-[0.98]"
            >
              {loading ? 'Sending...' : 'Send Message'}
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
