'use client'

import { useState } from 'react'
import {
    SiTypescript, SiJavascript, SiPython,
    SiReact, SiNextdotjs, SiHtml5, SiTailwindcss,
    SiNodedotjs, SiMysql,
    SiAppium, SiGit, SiGithub,
} from 'react-icons/si'
import { FaBrain, FaRobot, FaServer, FaVial } from 'react-icons/fa'

const skillGroups = [
    {
        category: 'Languages',
        skills: [
            { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
            { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
            { icon: SiPython, name: 'Python', color: '#3776AB' },
        ],
    },
    {
        category: 'Frontend',
        skills: [
            { icon: SiReact, name: 'React', color: '#61DAFB' },
            { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
            { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
            { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { icon: FaServer, name: '.NET Core', color: '#512BD4' },
            { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
            { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
            { icon: FaServer, name: 'REST APIs', color: '#6366f1' },
        ],
    },
    {
        category: 'AI Engineering',
        skills: [
            { icon: FaBrain, name: 'Claude API', color: '#CC785C' },
            { icon: FaRobot, name: 'AI Agents', color: '#CC785C' },
            { icon: FaBrain, name: 'RAG Architecture', color: '#CC785C' },
        ],
    },
    {
        category: 'Testing & QA',
        skills: [
            { icon: SiAppium, name: 'Appium', color: '#662D91' },
            { icon: FaVial, name: 'Selenium', color: '#43B02A' },
        ],
    },
    {
        category: 'DevOps & Tools',
        skills: [
            { icon: SiGit, name: 'Git', color: '#F05032' },
            { icon: SiGithub, name: 'GitHub', color: '#24292e' },
        ],
    },
]

function SkillCard({ icon: Icon, name, color }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-zinc-200 dark:border-zinc-800 p-4 flex flex-col items-center gap-3 cursor-default transition-all duration-300"
            style={{
                borderColor: hovered ? color : undefined,
                transform: hovered ? 'scale(1.1)' : 'scale(1)',
            }}
        >
            <Icon
                className="text-2xl transition-all duration-300 text-zinc-400 dark:text-zinc-500"
                style={{ color: hovered ? color : undefined }}
            />
            <p
                className="text-xs tracking-wider text-center transition-all duration-300 text-zinc-500 dark:text-zinc-400"
                style={{ color: hovered ? color : undefined }}
            >
                {name}
            </p>
        </div>
    )
}

export default function Skills() {
    return (
        <section id="skills" className="relative z-10 min-h-screen flex flex-col md:flex-row items-start md:items-center px-8 sm:px-12 md:px-16 lg:px-32 py-16 md:py-32 gap-12 md:gap-24">

            {/* Left — Skill Groups */}
            <div className="w-full md:w-1/2">
                <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-4">
                    What I work with
                </p>
                <h2 className="text-zinc-900 dark:text-white text-4xl md:text-5xl font-bold mb-12 md:mb-16">
                    My toolkit.
                </h2>

                <div className="flex flex-col gap-10">
                    {skillGroups.map((group) => (
                        <div key={group.category}>
                            <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-4">
                                {group.category}
                            </p>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-3">
                                {group.skills.map((skill) => (
                                    <SkillCard
                                        key={skill.name}
                                        icon={skill.icon}
                                        name={skill.name}
                                        color={skill.color}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right — CTA */}
            <div className="w-full md:w-1/2 flex flex-col justify-center md:sticky md:top-32 self-start pl-0 md:pl-16 lg:pl-32">
                <p className="text-zinc-400 dark:text-zinc-600 text-xs tracking-[0.3em] uppercase mb-8">
                    Let&apos;s work together
                </p>
                <h3 className="text-zinc-200 dark:text-white/20 hover:text-zinc-900 dark:hover:text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 transition-all duration-700 cursor-default">
                    You&apos;ve seen<br />the skills.<br /><br />
                    Now let&apos;s see<br />what we can<br />build.
                </h3>
                <a
                    href="#contact"
                    className="relative overflow-hidden border border-zinc-900 dark:border-white text-zinc-900 dark:text-white w-fit px-8 py-3 text-xs tracking-[0.2em] uppercase group transition-all duration-300"
                >
                    <span className="absolute inset-0 bg-zinc-900 dark:bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                    <span className="relative group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                        Let&apos;s build together
                    </span>
                </a>
            </div>

        </section>
    )
}
