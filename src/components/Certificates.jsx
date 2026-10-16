import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { certificates } from './CertificatesData.jsx'

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <section id="certificates" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-24">
      <div className="mb-12">
        <h2 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase transition-colors duration-500">
          Certificates
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium mt-2 transition-colors duration-500">
          Validations of skills, competitions, and achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map(cert => (
          <motion.div
            key={cert.id}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelectedImg(cert)}
            className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-700 rounded-xl p-4 shadow-[6px_6px_0px_#18181b] dark:shadow-[6px_6px_0px_#facc15] cursor-pointer group flex flex-col justify-between transition-colors duration-500"
          >
            <div className="aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden relative mb-4">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-400 font-bold text-xs uppercase">
                  No Image
                </div>
              )}
            </div>

            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                {cert.issuer}
              </span>
              <h3 className="font-black text-zinc-900 dark:text-white text-lg tracking-tight mt-1 transition-colors duration-500">
                {cert.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative max-w-4xl w-full bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-600 p-4 rounded-2xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-3 px-2">
                <div>
                  <h4 className="font-black text-zinc-900 dark:text-white text-lg">
                    {selectedImg.title}
                  </h4>
                  <p className="text-xs font-mono text-zinc-500">
                    {selectedImg.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImg(null)}
                  className="w-8 h-8 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-bold flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="w-full max-h-[80vh] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center">
                <img
                  src={selectedImg.image}
                  alt={selectedImg.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}