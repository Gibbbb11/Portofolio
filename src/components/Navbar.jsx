import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
]

const Sun = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
)

const Moon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const Menu = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
)

// true kalau layar >= 768px (breakpoint `md` Tailwind)
function useIsDesktop() {
  const query = '(min-width: 768px)'
  const [match, setMatch] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = e => setMatch(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return match
}

export default function Navbar({ isDark, setIsDark }) {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [openState, setOpen] = useState(false)
  const isDesktop = useIsDesktop()
  // Menu mobile otomatis dianggap tertutup saat layar jadi desktop
  const open = openState && !isDesktop

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(
          e => e.isIntersecting && setActive(e.target.id)
        ),
      {
        rootMargin: '-40% 0px -55% 0px',
      }
    )

    ;[...links.map(l => l.id), 'contact'].forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Tutup menu mobile dengan tombol Escape
  useEffect(() => {
    if (!open) return
    const onKey = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const text = isDark ? 'text-zinc-300' : 'text-zinc-600'

  const link = id =>
    `text-sm font-bold transition-colors hover:text-blue-500 ${
      active === id ? 'text-blue-500' : text
    }`

  const panelBg = isDark
    ? 'bg-zinc-900/90 border-white/10'
    : 'bg-white/90 border-zinc-200'

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed z-50 inset-x-0 top-0 flex justify-center pointer-events-none"
    >
      <motion.nav
        aria-label="Main"
        animate={{
          // Desktop: pill menyusut sesuai isi. Mobile: tetap hampir selebar layar.
          width: scrolled ? (isDesktop ? 'auto' : '92%') : '100%',
          y: scrolled ? (isDesktop ? 24 : 12) : 0,
          borderRadius: scrolled ? '9999px' : '0px',
          paddingLeft: isDesktop ? (scrolled ? '36px' : '32px') : '16px',
          paddingRight: isDesktop ? (scrolled ? '36px' : '32px') : '16px',
          paddingTop: scrolled ? '12px' : isDesktop ? '20px' : '14px',
          paddingBottom: scrolled ? '12px' : isDesktop ? '20px' : '14px',
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 25,
        }}
        className={`relative pointer-events-auto flex items-center justify-between gap-4 md:gap-16 border transition-colors duration-500 ${
          scrolled
            ? isDark
              ? 'bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-150 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
              : 'bg-white/45 backdrop-blur-2xl backdrop-saturate-150 border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
            : isDark
              ? 'bg-zinc-950/80 border-zinc-800 backdrop-blur-md'
              : 'bg-zinc-50/80 border-zinc-200 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center gap-10 md:gap-16">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className={`font-black tracking-tighter text-lg ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            GIBRAN.
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} className={link(l.id)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Di layar kecil, tombol Contact pindah ke dalam menu */}
          <a
            href="#contact"
            className={`hidden sm:inline-block text-xs md:text-sm font-bold px-5 py-2 rounded-full transition-all hover:scale-105 ${
              isDark ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-white'
            }`}
          >
            Contact
          </a>

          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className={`w-10 h-10 md:w-9 md:h-9 flex items-center justify-center rounded-full transition-all hover:scale-110 cursor-pointer ${
              isDark
                ? 'bg-zinc-800/60 text-yellow-400 hover:bg-zinc-700'
                : 'bg-zinc-100/60 text-zinc-900 hover:bg-zinc-200'
            }`}
          >
            {isDark ? <Sun /> : <Moon />}
          </button>

          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all cursor-pointer ${
              isDark
                ? 'bg-zinc-800/60 text-white hover:bg-zinc-700'
                : 'bg-zinc-100/60 text-zinc-900 hover:bg-zinc-200'
            }`}
          >
            <Menu open={open} />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-full left-0 right-0 mt-2 rounded-2xl border backdrop-blur-2xl p-3 flex flex-col gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.15)] ${panelBg}`}
            >
              {links.map(l => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`${link(l.id)} px-4 py-3 rounded-xl ${
                    active === l.id
                      ? isDark ? 'bg-white/10' : 'bg-zinc-900/5'
                      : ''
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={`mt-1 text-center text-sm font-bold px-5 py-3 rounded-xl ${
                  isDark ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-white'
                }`}
              >
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  )
}
