import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectsFolder from './components/ProjectsFolder'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const t = localStorage.getItem('theme')
      if (t) return t === 'dark'
    } catch { }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light') } catch { }
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
      <AnimatePresence mode="wait">
        {showIntro && <Intro key="intro" />}
      </AnimatePresence>

      <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] ${isDark ? 'opacity-10' : 'opacity-100'}`}></div>
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none animate-pulse z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-400/20 blur-[120px] pointer-events-none animate-pulse z-0" style={{ animationDelay: '2s' }}></div>

      {/* Komponen hanya di-render saat intro selesai */}
      {!showIntro && (
        <div className="relative z-10">
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          <Hero />
          <About />
          <ProjectsFolder />
          <Certificates />
          <Contact />
        </div>
      )}
    </div>
  )
}