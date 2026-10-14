// Isi `issuer` dan `image` (mis. '/certs/python.png' di folder public/certs) dengan data aslimu.
const certificates = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Certificate ${i + 1}`,
  issuer: '',
  image: '',
}))

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24 py-16 sm:py-24 px-5 sm:px-6 max-w-6xl mx-auto">
      <div className="mb-10 sm:mb-16">
        <h2 className="text-[2rem] min-[400px]:text-4xl sm:text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase break-words">Certificates</h2>
        <div className="w-32 h-2 bg-[#fde047] mt-2"></div>
        <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg font-medium mt-4">Achievements and documented progress.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
        {certificates.map((c, i) => (
          <figure
            key={c.id}
            className={`relative bg-white dark:bg-zinc-800 p-2 sm:p-3 pb-3 sm:pb-4 border-2 border-zinc-900 dark:border-zinc-600 shadow-[3px_3px_0px_#18181b] dark:shadow-[3px_3px_0px_#facc15] sm:shadow-[4px_4px_0px_#18181b] sm:dark:shadow-[4px_4px_0px_#facc15] transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:z-20 ${i % 2 ? 'rotate-[1.5deg]' : 'rotate-[-1.5deg]'}`}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 bg-zinc-200/80 border border-zinc-300 rotate-[-3deg] z-10"></div>
            <div className="w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-600">
              {c.image ? (
                <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-zinc-400 dark:text-zinc-300 text-[10px] font-bold uppercase tracking-widest">Image {c.id}</span>
              )}
            </div>
            <figcaption className="mt-3 text-center">
              <p className="font-bold text-zinc-900 dark:text-white text-xs tracking-wide">{c.title}</p>
              {c.issuer && <p className="text-zinc-500 dark:text-zinc-400 text-[11px] mt-0.5">{c.issuer}</p>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}