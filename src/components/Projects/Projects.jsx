'use client'

import { useState, useEffect } from 'react'

const projects = [
    {
        id: 1,
        year: '2025',
        name: 'Career Coat of Arms',
        tagline: 'AI agent that turns career identity into a heraldic shield',
        category: 'AI · Fullstack',
        status: 'Live — used at Ensign College workshops',
        overview: [
            'Built a conversational AI agent that guides students through 7 career identity questions one at a time.',
            'Integrated Google Gemini API to generate a custom heraldic shield image on the trigger word "DRAW".',
            'Deployed and used in real career development workshops at Ensign College.',
        ],
        tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Google Gemini API'],
    },
    {
        id: 2,
        year: '2025',
        name: 'JobLens AI',
        tagline: 'AI-powered job application tracker',
        category: 'AI · Fullstack',
        status: 'In development',
        overview: [
            'Built a full-stack app to track job applications and their status in one place.',
            'Integrated Claude API to analyze job descriptions and give actionable insights.',
            'Designed with a React + Vite frontend and a Node.js + Express + SQLite backend.',
        ],
        tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'SQLite', 'Claude API'],
    },
]

export default function Projects() {
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        if (selected) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [selected])

    return (
        <section id="projects" className="relative z-10 min-h-screen flex flex-col md:flex-row items-start md:items-center px-8 sm:px-12 md:px-16 lg:px-32 py-16 md:py-32">

            {/* Left Column */}
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-16 md:mb-0">
                <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-4">Selected work</p>
                <h2 className="text-zinc-900 dark:text-white text-4xl md:text-5xl font-bold mb-8">
                    Things I&apos;ve<br />actually built.
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed mb-4 max-w-md">
                    Not tutorials. Not to-do apps. Real projects used by real people — built to solve specific problems and shipped end-to-end.
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed max-w-md">
                    Each one is a step toward the kind of engineer I&apos;m becoming — one who can design, build, and ship.
                </p>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 pl-0 md:pl-16">
                <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-12">Projects</p>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setSelected(project)}
                        className="relative pl-8 mb-12 border-l-2 border-zinc-200 dark:border-zinc-700 cursor-pointer group hover:border-zinc-900 dark:hover:border-white transition-all duration-300"
                    >
                        <p className="text-zinc-500 text-sm tracking-widest uppercase mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                            {project.year} · {project.category}
                        </p>
                        <p className="text-zinc-900 dark:text-white text-2xl font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300">
                            {project.name}
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400 text-base">{project.tagline}</p>
                        <p className="text-zinc-400 dark:text-zinc-600 text-sm mt-1">{project.status}</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="animate-fadeZoom bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-zinc-200 dark:border-white/10 shadow-2xl dark:shadow-none p-8 md:p-10 max-w-lg w-full mx-6 overflow-y-auto max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button — always visible at top */}
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setSelected(null)}
                                className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 text-xl leading-none"
                                aria-label="Close"
                            >
                                ×
                            </button>
                        </div>

                        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-2">{selected.year} · {selected.category}</p>
                        <h3 className="text-zinc-900 dark:text-white text-3xl font-bold mb-2">{selected.name}</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">{selected.tagline}</p>
                        <p className="text-zinc-400 dark:text-zinc-600 text-xs mb-8">{selected.status}</p>

                        <div className="border-t border-zinc-200 dark:border-zinc-700 mb-8" />

                        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-4">What I built</p>
                        <ul className="space-y-3 mb-8">
                            {selected.overview.map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                                    <span className="text-zinc-900 dark:text-white mt-1">—</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-4">Tech stack</p>
                        <div className="flex flex-wrap gap-2 mb-10">
                            {selected.tech.map((t, i) => (
                                <span key={i} className="border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs px-3 py-1 tracking-wider">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <button
                            onClick={() => setSelected(null)}
                            className="text-zinc-400 dark:text-zinc-500 text-xs tracking-widest uppercase hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}
