'use client'

import React, { useState } from 'react'

export default function RoninArtsWebsite() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-xl">R</span>
            </div>
            <div>
              <div className="font-bold text-lg">RONIN ARTS</div>
              <div className="text-xs text-gray-400">INTERACTIVE</div>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-cyan-400 transition-colors">HOME</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">ABOUT</a>
            <a href="#games" className="hover:text-cyan-400 transition-colors">GAMES</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            RONIN ARTS INTERACTIVE
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-gray-300 font-light">
            Next-Gen VR/AR/XR Games & Experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
              EXPLORE
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 rounded-full text-white font-semibold text-lg hover:bg-purple-500/20 transition-all">
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-slate-100 to-gray-200 text-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold mb-4 uppercase tracking-wide">Ronin Arts Interactive</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              GAMIFYING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">EVERYTHING</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Next-Gen VR/AR/XR Games & Experiences for Every Service.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We go beyond games. We integrate powerful gamification frameworks like <strong>Octalysis</strong> and <strong>Bisevo</strong> to transform your business processes, education, and services into engaging, high-fidelity experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg transition-all">
              EXPLORE SOLUTIONS
            </button>
            <button className="px-8 py-4 border-2 border-slate-900 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-all">
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 px-6 bg-white text-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Methodology</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              We don't just add badges. We use scientifically proven frameworks to drive human motivation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Octalysis Framework</h3>
              <p className="text-gray-600">
                Leveraging the 8 Core Drives of human motivation to create systems that users want to interact with, not just have to.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Bisevo Integration</h3>
              <p className="text-gray-600">
                Advanced behavioral science integration to optimize user journeys and retention hooks in your digital ecosystem.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl border border-pink-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Ronin XR Engine</h3>
              <p className="text-gray-600">
                Our proprietary tech stack that seamlessly blends gamification logic with high-fidelity 3D environments and avatars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Gamify Your World?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join the revolution. Let Ronin Arts Interactive design the next generation of your service engagement.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
              >
                GET STARTED
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. No spam, just quest.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-slate-900 font-bold">R</span>
                </div>
                <span className="font-bold">RONIN ARTS</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#methodology" className="hover:text-cyan-400 transition-colors">Methodology</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.instagram.com/roninartsinteractive/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
                <li><a href="mailto:raghav@roninartsinteractive.com" className="hover:text-cyan-400 transition-colors">Email Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
            © 2024 Ronin Arts Interactive. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}