'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import ravnLogo from '@/assets/ravn.png'
import tecsupLogo from '@/assets/tecsup.png'
import bsgLogo from '@/assets/bsg.png'

const experiences = [
    {
        id: 1,
        period: '2024 — 2025',
        role: 'QA Engineer',
        company: 'RAVN',
        client: 'Client: HowWeFeel (Pinterest)',
        location: 'American Fork, Utah',
        logo: ravnLogo,
        overview: [
            'Architected mobile automation framework using WebDriverIO, Appium & TypeScript for iOS and Android.',
            'Reduced manual regression testing from 25 to 15 hours — 40% faster release cycles.',
            'Led technical training for 4 QA engineers, improving team velocity by 35%.',
        ],
        tech: ['TypeScript', 'Appium', 'WebDriverIO', 'iOS', 'Android', 'CI/CD'],
    },
    {
        id: 2,
        period: '2023',
        role: 'Software Developer',
        company: 'Tecsup',
        client: 'Client: Anglo American Mine',
        location: 'Arequipa, Peru',
        logo: tecsupLogo,
        overview: [
            'Optimized SQL Server performance by 25% through query analysis and strategic indexing.',
            'Developed .NET backend APIs for 300+ media files, improving response time by 40%.',
            'Implemented GitHub workflow best practices for a team of 5 developers.',
        ],
        tech: ['.NET Core', 'SQL Server', 'REST APIs', 'GitHub', 'C#'],
    },
    {
        id: 3,
        period: '2023',
        role: 'Software Developer Intern',
        company: 'BSG Institute',
        client: '',
        location: 'Arequipa, Peru',
        logo: bsgLogo,
        overview: [
            'Built a virtual exam simulator platform for 200+ concurrent users.',
            'Reduced page load times by 35% using Angular frontend and .NET backend.',
            'Simplified database queries to handle high-traffic exam sessions seamlessly.',
        ],
        tech: ['Angular', '.NET', 'Entity Framework', 'SQL'],
    },
]

export default function About() {
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
        <section id="about" className="relative z-10 flex flex-col md:flex-row items-start md:items-center px-8 sm:px-12 md:px-16 lg:px-32 py-16 md:py-32">

            {/* Left Column */}
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-16 md:mb-0">
                <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-4">About me</p>
                <h2 className="text-zinc-900 dark:text-white text-4xl md:text-5xl font-bold mb-8">
                    The climb<br />never stops.
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed mb-4 max-w-md">
                    Originally from Peru where the Andes shaped my perspective — I moved to Utah to pursue my Software Engineering degree at Ensign College.
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed mb-16 max-w-md">
                    My journey started in QA automation, building mobile testing frameworks for Pinterest and reducing regression cycles by 40%. Today I&apos;m focused on fullstack
                    development and AI engineering — building tools that actually matter.
                </p>
                <div className="flex gap-10 sm:gap-16">
                    <div>
                        <p className="text-zinc-900 dark:text-white text-4xl font-bold">3+</p>
                        <p className="text-zinc-500 text-xs tracking-widest uppercase mt-1">Years experience</p>
                    </div>
                    <div>
                        <p className="text-zinc-900 dark:text-white text-4xl font-bold">4</p>
                        <p className="text-zinc-500 text-xs tracking-widest uppercase mt-1">Languages spoken</p>
                    </div>
                    <div>
                        <p className="text-zinc-900 dark:text-white text-4xl font-bold">ISTQB</p>
                        <p className="text-zinc-500 text-xs tracking-widest uppercase mt-1">Certified</p>
                    </div>
                </div>
            </div>

            {/* Right Column - Timeline */}
            <div className="w-full md:w-1/2 pl-0 md:pl-16">
                <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-12">Experience</p>
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        onClick={() => setSelected(exp)}
                        className="relative pl-8 mb-12 border-l-2 border-zinc-200 dark:border-zinc-700 cursor-pointer group hover:border-zinc-900 dark:hover:border-white transition-all duration-300"
                    >
                        <p className="text-zinc-500 text-sm tracking-widest uppercase mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                            {exp.period}
                        </p>
                        <p className="text-zinc-900 dark:text-white text-2xl font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300">
                            {exp.role}
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400 text-base">{exp.company}</p>
                        <p className="text-zinc-400 dark:text-zinc-600 text-sm mt-1">{exp.location}</p>
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

                        {/* Logo */}
                        <div className="flex justify-center mb-8">
                            <Image
                                src={selected.logo}
                                alt={selected.company}
                                width={140}
                                height={50}
                                className="object-contain dark:brightness-200 dark:grayscale"
                                style={{ filter: undefined }}
                            />
                        </div>

                        <div className="border-t border-zinc-200 dark:border-zinc-700 mb-8" />

                        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-2">{selected.period}</p>
                        <h3 className="text-zinc-900 dark:text-white text-3xl font-bold mb-1">{selected.role}</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">
                            {selected.company} {selected.client && `· ${selected.client}`}
                        </p>
                        <p className="text-zinc-400 dark:text-zinc-600 text-xs mb-8">{selected.location}</p>

                        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-4">What I did</p>
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
