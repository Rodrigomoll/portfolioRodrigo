'use client'

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end px-10 py-6 bg-gradient-to-b from-black/60 to-transparent">
            <ul className="flex gap-10">
                <li>
                    <a href="#home" className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300">
                        About
                    </a>
                </li>
                <li>
                    <a href="#skills" className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}