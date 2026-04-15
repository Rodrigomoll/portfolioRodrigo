'use client'

import { useState } from 'react'
import { useTheme } from '@/components/ThemeProvider/ThemeProvider'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const links = ['home', 'about', 'skills', 'projects', 'contact']

export default function NavBar() {
    const { theme, toggleTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 bg-gradient-to-b from-black/70 dark:from-black/60 to-transparent">
            <div className="flex justify-between items-center">

                {/* Logo / name */}
                <span className="text-white/60 text-xs tracking-[0.2em] uppercase">RM</span>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link}`}
                                className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="text-white/50 hover:text-white transition-colors duration-300 ml-2"
                        >
                            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                        </button>
                    </li>
                </ul>

                {/* Mobile: theme toggle + hamburger */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="text-white/50 hover:text-white transition-colors duration-300"
                    >
                        {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                    </button>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="text-white/50 hover:text-white transition-colors duration-300"
                    >
                        {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col gap-5 pt-6 pb-2">
                    {links.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link}`}
                                onClick={() => setMenuOpen(false)}
                                className="text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}
