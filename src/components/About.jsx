import { images } from '../data/images'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24 px-5 sm:px-6 max-w-5xl mx-auto">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-4xl min-[400px]:text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase transition-colors duration-500">
          About Me
        </h2>
        <div className="w-32 h-2 bg-zinc-900 dark:bg-white mt-2 transition-colors duration-500"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
        {/* KARTU KIRI (Dibuat lebih panjang dan stabil dengan Quick Facts) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 bg-[#fdfbf7] dark:bg-zinc-900 p-6 sm:p-8 border-2 border-zinc-900 dark:border-zinc-700 shadow-[5px_5px_0px_#18181b] dark:shadow-[5px_5px_0px_#facc15] sm:shadow-[8px_8px_0px_#18181b] sm:dark:shadow-[8px_8px_0px_#facc15] rounded-xl relative flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 sm:hover:shadow-[12px_12px_0px_#18181b] sm:dark:hover:shadow-[12px_12px_0px_#facc15] w-full max-w-xl mx-auto lg:max-w-none">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-white/50 backdrop-blur-sm border border-zinc-300 rotate-[-2deg] shadow-sm"></div>
          
          <div className="w-40 sm:w-48 aspect-square bg-zinc-200 border-2 border-zinc-900 rounded-lg flex items-center justify-center relative overflow-hidden my-4 shadow-inner group cursor-pointer">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#e4e4e7_49%,#e4e4e7_51%,transparent_52%),linear-gradient(-45deg,transparent_48%,#e4e4e7_49%,#e4e4e7_51%,transparent_52%)] opacity-40 transition-transform duration-700 group-hover:scale-110"></div>
            {images.about ? <img src={images.about} alt="Gibran" className="w-full h-full object-cover relative z-10" /> : <span className="text-zinc-500 font-bold text-sm z-10">Gibran Photo</span>}
          </div>

          <div className="mt-2 w-full">
            <span className="inline-block px-3 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-mono font-bold rounded mb-3">
              SOFTWARE ENGINEERING
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
              Gibran Rafisqy Sulistyo
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium mt-1">
              SMK Plus Pelita Nusantara Bogor
            </p>

            {/* Tambahan Info Mini / Quick Facts agar kartu kiri lebih panjang & proporsional */}
            <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-zinc-700 grid grid-cols-2 gap-4 text-left">
              <div>
                <span className="block text-[10px] font-mono text-zinc-400 uppercase">Role</span>
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Student / Dev</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-zinc-400 uppercase">Location</span>
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Bogor, ID</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-zinc-400 uppercase">Focus</span>
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">UI/UX & Web</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-zinc-400 uppercase">Status</span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Available</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-700 text-xs font-mono text-zinc-500 tracking-widest uppercase">
              Bogor, Indonesia
            </div>
          </div>
        </div>

        {/* KARTU KANAN */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white dark:bg-zinc-900 p-5 sm:p-6 md:p-8 border-2 border-zinc-900 dark:border-zinc-700 shadow-[4px_4px_0px_#18181b] dark:shadow-[4px_4px_0px_#facc15] sm:shadow-[6px_6px_0px_#18181b] sm:dark:shadow-[6px_6px_0px_#facc15] rounded-xl relative transition-all duration-500 lg:hover:-translate-x-2">
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-emerald-500 border border-zinc-900"></div>
            <h4 className="font-black text-zinc-900 dark:text-white text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
              <span>-</span> Overview
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium text-sm md:text-base">
              I’m a Software Engineering student with a growing focus on UI/UX design and digital experiences. I enjoy turning ideas into interfaces that feel simple, clear, and purposeful. I’m interested in more than just how an interface looks — I also like thinking about how people interact with it and how design can make that experience better.
            </p>
          </div>

          <div className="bg-[#fef08a] dark:bg-yellow-950/40 p-5 sm:p-6 md:p-8 border-2 border-zinc-900 dark:border-zinc-700 shadow-[4px_4px_0px_#18181b] dark:shadow-[4px_4px_0px_#facc15] sm:shadow-[6px_6px_0px_#18181b] sm:dark:shadow-[6px_6px_0px_#facc15] rounded-xl relative rotate-[1deg] transition-all duration-500 lg:hover:-translate-x-2">
            <h4 className="font-black text-zinc-900 dark:text-white text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
              <span>-</span> Tech & Code
            </h4>
            <p className="text-zinc-900 dark:text-zinc-200 leading-relaxed font-medium text-sm mb-4">
              Figma is currently my main design tool, while Python is the language I use most when building and experimenting with my own tools. I enjoy designing interfaces and building small tools around problems I encounter myself, such as Guitar Toolkit. Also familiar with PHP, Laravel, MySQL, and React Native.
            </p>
            <div className="flex flex-wrap gap-2">
              {['PHP', 'Laravel', 'React Native', 'Python', 'MySQL'].map(tech => (
                <span key={tech} className="px-2.5 py-1 bg-white dark:bg-zinc-800 border border-zinc-900 dark:border-zinc-700 text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 rounded shadow-xs cursor-default hover:bg-zinc-100 dark:hover:bg-zinc-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#bfdbfe] dark:bg-blue-950/40 p-5 sm:p-6 md:p-8 border-2 border-zinc-900 dark:border-zinc-700 shadow-[4px_4px_0px_#18181b] dark:shadow-[4px_4px_0px_#facc15] sm:shadow-[6px_6px_0px_#18181b] sm:dark:shadow-[6px_6px_0px_#facc15] rounded-xl relative rotate-[-1deg] transition-all duration-500 lg:hover:-translate-x-2">
            <h4 className="font-black text-zinc-900 dark:text-white text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
              <span>-</span> Hobbies & Interests
            </h4>
            <p className="text-zinc-900 dark:text-zinc-200 leading-relaxed font-medium text-sm">
              Outside of design and coding, I play instrument like guitar, explore software and system environments, and create stories as a Dungeon Master. I like turning ideas into something tangible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}