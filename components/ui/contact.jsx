'use client'
import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';
import { sendEmail } from '@/app/actions/sendEmail';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  
  // New state for Toast visibility
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail(formData);

      // 1. Show Toast on Success
      setShowToast(true);
      
      // 2. Hide Toast after 3 seconds
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

  return (
    <section className="min-h-screen pt-24 max-w-7xl mx-auto p-6 md:p-8 lg:px-36 relative">
      
      

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-10">Contact Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        
        {/* --- Contact Info Card --- */}
        <div className="relative bg-neutral-900 rounded-2xl p-6 md:p-8 shadow-xl border border-neutral-800 transition overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 " />

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-800 transition">
              <Mail className="w-6 h-6 text-teal-400 flex-shrink-0" />
              <span className="text-gray-300 break-all">charan.vardham@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-800 transition">
              <MapPin className="w-6 h-6 text-teal-400 flex-shrink-0" />
              <span className="text-gray-300">Cleveland, OH</span>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-neutral-800">
            <p className="text-xs tracking-widest text-gray-500 mb-4">FIND ME ONLINE</p>
            <div className="flex gap-4">
              <a href="https://github.com/Charan6924" target="_blank" className="group p-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition">
                <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/charan-vardham-3bb187312/" target="_blank" className="group p-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition">
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="https://x.com/cboyxxxx" target="_blank" className="group p-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition">
                <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* --- Contact Form --- */}
        <form onSubmit={handleSubmit} className="bg-neutral-900 rounded-2xl p-6 md:p-8 border border-neutral-800 shadow-xl flex flex-col gap-6">
          <div>
            <label className="text-sm text-gray-400">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3 text-white resize-none focus:outline-none focus:border-teal-400 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-semibold py-3 transition disabled:opacity-60 active:scale-95"
          >
            {loading ? 'Sending…' : 'Send Message'}
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}