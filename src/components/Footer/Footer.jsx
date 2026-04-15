export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-zinc-200 dark:border-zinc-800 px-8 sm:px-12 md:px-32 py-12 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-zinc-500 text-xs tracking-widest uppercase">
                Rodrigo Mollocondo
            </p>
            <div className="flex gap-8 sm:gap-10">
                <a
                    href="https://github.com/Rodrigomoll"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 text-xs tracking-widest uppercase hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/rodrigo-mollocondo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 text-xs tracking-widest uppercase hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:rodrigomoll005@gmail.com"
                    className="text-zinc-500 text-xs tracking-widest uppercase hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                >
                    Email
                </a>
            </div>
        </footer>
    )
}
