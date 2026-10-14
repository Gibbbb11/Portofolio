import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fdfbf7] dark:bg-zinc-950 px-6"
    >
      <div className="flex flex-row flex-wrap justify-center items-center gap-3 md:gap-5">
        {['GIBRAN', 'RAFISQY', 'SULISTYO'].map((word, index) => (
          <div key={word} className="overflow-hidden py-1 md:py-2">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: index * 0.15 }}
              className="text-3xl sm:text-5xl md:text-7xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-none m-0"
            >
              {word}
            </motion.h1>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
        className="w-32 md:w-64 h-1.5 bg-zinc-900 dark:bg-white mt-10 origin-left"
      />
    </motion.div>
  )
}