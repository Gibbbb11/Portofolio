import { images } from '../data/images'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-5 sm:px-6 max-w-5xl mx-auto mb-12 sm:mb-20 scroll-mt-24">
      <div className="flex pl-4 sm:pl-8 relative z-20 -mb-[2px]">
        <div className="bg-[#bfdbfe] dark:bg-zinc-800 border-2 border-b-0 border-zinc-900 dark:border-zinc-700 px-5 sm:px-8 py-3 rounded-t-xl text-xs sm:text-base font-bold text-zinc-900 dark:text-white uppercase tracking-widest shadow-[4px_0px_0px_rgba(0,0,0,0.1)] transition-colors duration-500">
          Contact Form
        </div>
      </div>

      <div className="bg-[#fdfbf7] dark:bg-zinc-900 rounded-xl rounded-tl-none border-2 border-zinc-900 dark:border-zinc-700 shadow-[5px_5px_0px_#18181b] dark:shadow-[5px_5px_0px_#facc15] sm:shadow-[8px_8px_0px_#18181b] sm:dark:shadow-[8px_8px_0px_#facc15] md:shadow-[12px_12px_0px_#18181b] md:dark:shadow-[12px_12px_0px_#facc15] p-4 min-[400px]:p-6 sm:p-8 md:p-16 relative z-10 overflow-hidden transition-colors duration-500">
        <div className="flex justify-center mb-10 sm:mb-16 relative z-30">
          <div className="relative bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-700 px-5 sm:px-8 py-3 inline-block transition-all duration-500 hover:scale-105">
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-blue-500 border-2 border-zinc-900"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-blue-500 border-2 border-zinc-900"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-blue-500 border-2 border-zinc-900"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-blue-500 border-2 border-zinc-900"></div>
            <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase transition-colors duration-500">
              Let's Talk
            </h2>
          </div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto flex justify-center items-center lg:min-h-[420px]">
          <div className="hidden lg:block absolute left-0 lg:left-4 top-10 w-48 bg-white p-3 pb-12 shadow-xl border-2 border-zinc-900 rotate-[-8deg] z-10 transition-all duration-500 hover:rotate-[-4deg] hover:z-40 hover:-translate-y-2 cursor-pointer">
            <div className="absolute -top-3 left-4 w-12 h-6 bg-zinc-200/80 backdrop-blur-md border border-zinc-300 rotate-[-5deg]"></div>
            <div className="w-full aspect-square bg-zinc-900 flex items-center justify-center border border-zinc-800">
              {images.contactMe ? <img src={images.contactMe} alt="Gibran" className="w-full h-full object-cover " /> : <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Me.jpg</span>}
            </div>
          </div>

          <div className="relative bg-[#fde047] w-full max-w-md p-5 sm:p-6 md:p-10 shadow-2xl border-2 border-zinc-900 z-30 rotate-[-1deg] transition-all duration-500 hover:rotate-0 hover:scale-[1.01]">
            <h3 className="font-black text-zinc-900 text-lg tracking-widest uppercase mb-5 sm:mb-6 border-b-2 border-zinc-900 pb-2">
              Send Message
            </h3>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col gap-6">
              <input 
                type="text" 
                name="name"
                required
                placeholder="Your name..." 
                className="w-full bg-transparent border-b-2 border-zinc-900/60 focus:border-zinc-900 px-0 py-2 text-zinc-900 placeholder:text-zinc-700 font-bold focus:outline-none transition-colors duration-300"
              />
              <input 
                type="email" 
                name="email"
                required
                placeholder="Your email..." 
                className="w-full bg-transparent border-b-2 border-zinc-900/60 focus:border-zinc-900 px-0 py-2 text-zinc-900 placeholder:text-zinc-700 font-bold focus:outline-none transition-colors duration-300"
              />
              <textarea 
                name="message"
                required
                rows="3" 
                placeholder="Write a message for Gibran..." 
                className="w-full bg-transparent border-b-2 border-zinc-900/60 focus:border-zinc-900 px-0 py-2 text-zinc-900 placeholder:text-zinc-700 font-bold focus:outline-none transition-colors duration-300 resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="mt-2 bg-zinc-900 text-white font-bold uppercase tracking-widest text-sm px-6 py-3 border-2 border-zinc-900 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>

          <div className="hidden lg:block absolute right-0 lg:right-4 -bottom-10 w-48 bg-white p-3 pb-12 shadow-xl border-2 border-zinc-900 rotate-[10deg] z-20 transition-all duration-500 hover:rotate-[4deg] hover:z-40 hover:-translate-y-2 cursor-pointer">
            <div className="absolute -top-3 right-4 w-12 h-6 bg-zinc-200/80 backdrop-blur-md border border-zinc-300 rotate-[5deg]"></div>
            <div className="w-full aspect-square bg-blue-200 flex items-center justify-center border border-zinc-300">
              {images.contactSetup ? <img src={images.contactSetup} alt="Setup" className="w-full h-full object-cover " /> : <span className="text-blue-800 text-[10px] uppercase font-bold tracking-widest">Setup.jpg</span>}
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-24 lg:mt-24 pt-8 border-t-2 border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-6 relative z-30 transition-colors duration-500">
          <p className="text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest text-xs transition-colors duration-500">Find Me On</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/gibran-rafisqy-903686405" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-600 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-[2px_2px_0px_#18181b] dark:shadow-[2px_2px_0px_#facc15] text-zinc-900 dark:text-white cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/gbrfq/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-600 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-[2px_2px_0px_#18181b] dark:shadow-[2px_2px_0px_#facc15] text-zinc-900 dark:text-white cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/Gibbbb11" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub" 
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-600 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-[2px_2px_0px_#18181b] dark:shadow-[2px_2px_0px_#facc15] text-zinc-900 dark:text-white cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>

            {/* Team Acknowledge (Dengan ikon Shield & tulisan Team Acknowledge) */}
            <a 
              href="https://www.ackteams.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Team Acknowledge" 
              className="flex items-center px-4 h-12 gap-2 bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-600 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:-translate-y-1 transition-all duration-300 shadow-[2px_2px_0px_#18181b] dark:shadow-[2px_2px_0px_#facc15] text-zinc-900 dark:text-white cursor-pointer font-bold text-xs uppercase tracking-wider"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Team Acknowledge</span>
            </a>

          </div>
          <p className="mt-4 text-zinc-400 dark:text-zinc-500 font-medium text-[10px] sm:text-xs text-center tracking-widest uppercase transition-colors duration-500">
            © 2026 Gibran Rafisqy
          </p>
        </div>
      </div>
    </section>
  )
}