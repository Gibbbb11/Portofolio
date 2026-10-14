import { images } from '../data/images'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-svh pt-28 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-6 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16">
      
      <div className="flex-1 min-w-0 text-center lg:text-left z-20">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-5 sm:mb-6 px-3 sm:px-4 py-1.5 rounded-full border-2 border-zinc-900 dark:border-zinc-600 bg-[#fde047] text-zinc-900 text-xs sm:text-sm font-bold shadow-[3px_3px_0px_#18181b] dark:shadow-[3px_3px_0px_#facc15]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span> Open for collaboration
        </motion.span>
        
        <motion.h1 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1, delay: 0.2 }}
          className="text-6xl min-[400px]:text-7xl md:text-8xl lg:text-9xl font-black text-zinc-900 dark:text-white tracking-tighter leading-none transition-colors duration-500"
        >
          GIBRAN
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-md mx-auto lg:mx-0 leading-relaxed transition-colors duration-500"
        >
            UI/UX Designer & Software Engineering student.
            Designing interfaces, building tools, and turning ideas into something tangible.        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 sm:mt-8 flex flex-wrap gap-2 justify-center lg:justify-start"
        >
          {['Figma', 'Python', 'MySQL'].map(t => (
            <span key={t} className="px-3 py-1 rounded-md border-2 border-zinc-900 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100">
              {t}
            </span>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.6 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
        >
          <a href="#projects" className="inline-flex justify-center items-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg">
            View Projects
          </a>
          <a href="#contact" className="inline-flex justify-center items-center bg-white dark:bg-transparent border-2 border-zinc-900 dark:border-zinc-700 text-zinc-900 dark:text-zinc-200 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-zinc-900 hover:text-white dark:hover:border-white transition-colors">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Kontainer Luar: Mengurus Animasi Masuk (Entry) */}
      <motion.div
        initial={{ opacity: 0, x: -300, y: 200, rotate: -60, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -3, scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1.4, delay: 0.7 }}
        className="z-30 cursor-pointer shrink-0"
      >
        {/* Kontainer Dalam: Mengurus Efek Hover yang Mulus Tanpa Konflik */}
        <motion.div
          whileHover={{ y: -15, rotate: 2, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-56 sm:w-64 lg:w-80 bg-white p-3 sm:p-4 pb-14 sm:pb-16 border-2 border-zinc-900 shadow-2xl transition-colors duration-500"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-zinc-200/60 backdrop-blur-md border border-zinc-300 rotate-[-2deg] shadow-sm z-10"></div>
          <div className="w-full aspect-square bg-zinc-100 border border-zinc-200 flex items-center justify-center overflow-hidden transition-colors duration-500">
             {images.hero ? <img src={images.hero} alt="Gibran" className="w-full h-full object-cover" /> : <span className="text-zinc-400 font-bold text-sm">Image Placeholder</span>}
          </div>
          <p className="absolute bottom-5 left-0 w-full text-center font-bold text-zinc-600 italic tracking-wide">
            Bogor, 2026
          </p>
        </motion.div>
      </motion.div>

    </section>
  )
}