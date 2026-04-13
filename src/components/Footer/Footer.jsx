export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-zinc-800 px-32 py-12 flex justify-between items-center">
            <p className="text-zinc-600 text-xs tracking-widest uppercase">
                Rodrigo Mollocondo
            </p>
            <div className="flex gap-10">
                <a
                    href="https://github.com/Rodrigomoll"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 text-xs tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/rodrigo-mollocondo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 text-xs tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:rodrigomoll005@gmail.com"
                    className="text-zinc-500 text-xs tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                    Email
                </a>
            </div>
        </footer>
    )
}