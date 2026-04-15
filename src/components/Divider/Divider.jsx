'use client'

import { useEffect, useRef } from 'react'

export default function Divider() {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add('visible')
                }
            },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div className="px-8 sm:px-12 md:px-16 lg:px-32">
            <div ref={ref} className="divider-line" />
        </div>
    )
}