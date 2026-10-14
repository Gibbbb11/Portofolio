import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projectsData'

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}
const group = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

export default function ProjectsFolder() {
  const [activeTab, setActiveTab] = useState(projects[0].id)
  const p = projects.find(x => x.id === activeTab)

  return (
    <section id="projects" className="py-16 sm:py-24 px-5 sm:px-6 max-w-5xl mx-auto scroll-mt-24">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-4xl min-[400px]:text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase">Projects</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg font-medium mt-2">A collection of code and interface explorations.</p>
      </div>

      <div role="tablist" className="flex gap-1 pl-4 sm:pl-8 md:pl-14 relative z-20 -mb-[2px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {projects.map(pr => {
          const on = pr.id === activeTab
          return (
            <button
              key={pr.id}
              role="tab"
              aria-selected={on}
              onClick={() => setActiveTab(pr.id)}
              className={`px-3 sm:px-4 md:px-6 py-2.5 rounded-t-xl border-2 border-b-0 border-zinc-900 dark:border-zinc-600 text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer transition-all ${
                on
                  ? 'bg-[#fde047] text-zinc-900 pt-3.5'
                  : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700'
              }`}
            >
              {pr.tabName}
            </button>
          )
        })}
      </div>

      <div className="bg-[#fdfbf7] dark:bg-zinc-900 rounded-r-2xl sm:rounded-r-3xl rounded-bl-2xl sm:rounded-bl-3xl rounded-tl-sm border-2 border-l-[12px] sm:border-l-[24px] border-zinc-900 dark:border-zinc-600 shadow-[5px_5px_0px_#18181b] dark:shadow-[5px_5px_0px_#facc15] sm:shadow-[8px_8px_0px_#18181b] sm:dark:shadow-[8px_8px_0px_#facc15] sm:min-h-[460px] p-5 sm:p-8 md:p-12 relative z-10 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} variants={group} initial="hidden" animate="visible" exit="exit" className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="flex-1 w-full min-w-0">
              <motion.div variants={item} className="inline-block px-4 py-1.5 bg-zinc-900 dark:bg-zinc-800 text-white text-xs font-bold rounded mb-4 sm:mb-6 tracking-wide">
                {p.category}
              </motion.div>
              <motion.h3 variants={item} className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter break-words">
                {p.title}
              </motion.h3>
              <motion.p variants={item} className="text-zinc-600 dark:text-zinc-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                {p.description}
              </motion.p>
              <motion.div variants={item} className="flex gap-2 flex-wrap mb-6 sm:mb-8">
                {p.tags.map(tag => (
                  <span key={tag} className="px-2.5 sm:px-3 py-1 border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 rounded-md text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-200">
                    {tag}
                  </span>
                ))}
              </motion.div>
              
              {(p.link || p.demo || p.repo) && (
                <motion.div variants={item} className="flex gap-3 flex-wrap">
                  {/* Tombol See More */}
                  {p.link && (
                    <a 
                      href={p.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-3 rounded-lg font-bold hover:-translate-y-1 hover:shadow-lg transition-all"
                    >
                      See More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="bg-zinc-900 dark:bg-[#fde047] text-white dark:text-zinc-900 px-5 sm:px-6 py-3 rounded-lg font-bold hover:-translate-y-1 hover:shadow-lg transition-all">
                      View Project
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="border-2 border-zinc-900 dark:border-zinc-300 text-zinc-900 dark:text-white px-5 sm:px-6 py-3 rounded-lg font-bold hover:-translate-y-1 transition-all">
                      Source Code
                    </a>
                  )}
                </motion.div>
              )}
            </div>

            <motion.div variants={item} className="flex-1 w-full min-w-0 aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-600 rounded-lg flex items-center justify-center overflow-hidden shadow-md">
              {p.image ? (
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-zinc-500 dark:text-zinc-400 font-bold text-sm">Preview coming soon</span>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}