'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/components/ThemeProvider/ThemeProvider'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
const gaussian = (value, center, spread) => Math.exp(
    -0.5 * Math.pow((value - center) / spread, 2),
)

const smoothstep = (edgeStart, edgeEnd, value) => {
    const progress = clamp((value - edgeStart) / (edgeEnd - edgeStart), 0, 1)
    return progress * progress * (3 - (2 * progress))
}

// Normalized points define an asymmetrical mountain skyline.
// Smaller y values are higher on the canvas.
const RIDGE_POINTS = [
    { x: 0, y: 0.88 },
    { x: 0.09, y: 0.82 },
    { x: 0.18, y: 0.72 },
    { x: 0.27, y: 0.58 },
    { x: 0.35, y: 0.39 },
    { x: 0.40, y: 0.25 },
    { x: 0.44, y: 0.13 },
    { x: 0.475, y: 0.07 },
    { x: 0.50, y: 0.085 },
    { x: 0.53, y: 0.13 },
    { x: 0.58, y: 0.30 },
    { x: 0.65, y: 0.53 },
    { x: 0.72, y: 0.70 },
    { x: 0.76, y: 0.63 },
    { x: 0.795, y: 0.54 },
    { x: 0.83, y: 0.55 },
    { x: 0.855, y: 0.60 },
    { x: 0.89, y: 0.69 },
    { x: 1, y: 0.82 },
]

const getRidgeY = (normalizedX) => {
    const pointIndex = RIDGE_POINTS.findIndex((point) => normalizedX <= point.x)

    if (pointIndex <= 0) return RIDGE_POINTS[0].y

    const start = RIDGE_POINTS[pointIndex - 1]
    const end = RIDGE_POINTS[pointIndex]
    const progress = (normalizedX - start.x) / (end.x - start.x)
    const ridgeY = start.y + ((end.y - start.y) * progress)

    // Two small waves keep the computer-generated ridge from feeling too perfect.
    const naturalVariation = (
        Math.sin(normalizedX * Math.PI * 17) * 0.006
        + Math.sin(normalizedX * Math.PI * 39) * 0.003
    )

    return clamp(ridgeY + naturalVariation, 0.04, 0.92)
}

export default function Mountain() {
    const { theme } = useTheme()
    const containerRef = useRef(null)
    const canvasRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const canvas = canvasRef.current
        const context = canvas?.getContext('2d')

        if (!container || !canvas || !context) return undefined

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
        const precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
        const pointer = { x: 0, y: 0, active: false }

        let dots = []
        let width = 0
        let height = 0
        let animationFrame = null
        let isVisible = true
        let isDestroyed = false

        const scheduleDraw = () => {
            if (animationFrame === null && isVisible && !isDestroyed) {
                animationFrame = window.requestAnimationFrame(draw)
            }
        }

        const draw = () => {
            animationFrame = null
            context.clearRect(0, 0, width, height)
            context.fillStyle = theme === 'dark' ? '#ffffff' : '#18181b'

            let dotsAreMoving = false

            dots.forEach((dot) => {
                let targetX = 0
                let targetY = 0
                let targetScale = 1
                let hoverStrength = 0

                if (pointer.active && !reducedMotion.matches) {
                    const distanceX = dot.x - pointer.x
                    const distanceY = dot.y - pointer.y
                    const distance = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY))
                    const interactionRadius = 110

                    if (distance > 0 && distance < interactionRadius) {
                        hoverStrength = Math.pow(1 - (distance / interactionRadius), 2)
                        const displacement = hoverStrength * 6
                        targetX = (distanceX / distance) * displacement
                        targetY = (distanceY / distance) * displacement
                        targetScale = 1 + (hoverStrength * 0.3)
                    }
                }

                dot.offsetX += (targetX - dot.offsetX) * 0.16
                dot.offsetY += (targetY - dot.offsetY) * 0.16
                dot.scale += (targetScale - dot.scale) * 0.16

                if (
                    Math.abs(targetX - dot.offsetX) > 0.02
                    || Math.abs(targetY - dot.offsetY) > 0.02
                    || Math.abs(targetScale - dot.scale) > 0.002
                ) {
                    dotsAreMoving = true
                }

                context.globalAlpha = clamp(dot.opacity + (hoverStrength * 0.28), 0, 1)
                context.beginPath()
                context.arc(
                    dot.x + dot.offsetX,
                    dot.y + dot.offsetY,
                    dot.radius * dot.scale,
                    0,
                    Math.PI * 2,
                )
                context.fill()
            })

            context.globalAlpha = 1

            if ((pointer.active || dotsAreMoving) && !reducedMotion.matches) {
                scheduleDraw()
            }
        }

        const buildDots = () => {
            const bounds = container.getBoundingClientRect()
            width = Math.max(1, Math.round(bounds.width))
            height = Math.max(1, Math.round(bounds.height))

            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
            canvas.width = Math.round(width * pixelRatio)
            canvas.height = Math.round(height * pixelRatio)
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

            const spacing = window.innerWidth < 480 ? 8 : window.innerWidth < 1024 ? 9 : 10
            const nextDots = []
            const mainPeakX = 0.485

            for (let y = spacing / 2; y < height; y += spacing) {
                for (let x = spacing / 2; x < width; x += spacing) {
                    const normalizedX = x / width
                    const normalizedY = y / height
                    const ridgeY = getRidgeY(normalizedX)

                    if (normalizedY < ridgeY) continue

                    const depth = (normalizedY - ridgeY) / (1 - ridgeY)
                    const distanceBelowRidge = normalizedY - ridgeY
                    const ridgeReveal = smoothstep(0, (spacing * 1.4) / height, distanceBelowRidge)
                    const leftFade = smoothstep(0.01, 0.16, normalizedX)
                    const rightFade = 1 - smoothstep(0.91, 1, normalizedX)
                    const edgeFade = leftFade * rightFade

                    // Larger dots gather around the main peak; the foothills dissolve.
                    const centerFocus = gaussian(normalizedX, mainPeakX, 0.245)
                    const secondaryPeak = 0.24 * gaussian(normalizedX, 0.80, 0.085)
                    const horizontalWeight = clamp(0.09 + (centerFocus * 0.86) + secondaryPeak, 0, 1)

                    // The mountain is divided into lit faces, spines, and darker gullies.
                    const mainGullyX = mainPeakX + (depth * 0.19)
                    const mainGully = 1 - (0.42 * gaussian(normalizedX, mainGullyX, 0.026 + (depth * 0.012)))
                    const leftGullyX = 0.455 - (depth * 0.20)
                    const leftGully = 1 - (0.25 * gaussian(normalizedX, leftGullyX, 0.018 + (depth * 0.018)))
                    const secondaryGullyX = 0.80 + (depth * 0.09)
                    const secondaryGully = 1 - (0.30 * gaussian(normalizedX, secondaryGullyX, 0.022))

                    const leftSpineX = mainPeakX - (depth * 0.10)
                    const leftSpine = 1 + (0.18 * gaussian(normalizedX, leftSpineX, 0.035))
                    const faceLight = 0.78 + (
                        0.24 * (1 - smoothstep(mainGullyX - 0.035, mainGullyX + 0.035, normalizedX))
                    )

                    // The upper central face behaves like a subtle snow/rock cap.
                    const upperCap = gaussian(normalizedX, mainPeakX, 0.14)
                        * (1 - smoothstep(0.06, 0.34, depth))
                    const capHighlight = 1 + (upperCap * 0.20)

                    // Layered deterministic noise breaks up the otherwise perfect dot field.
                    const broadTexture = (
                        Math.sin((normalizedX * 38) + (normalizedY * 21))
                        + Math.sin((normalizedX * 17) - (normalizedY * 33))
                    ) * 0.055
                    const rockGrain = (
                        Math.sin((normalizedX * 91) + (normalizedY * 47))
                        * Math.cos((normalizedX * 53) - (normalizedY * 79))
                    ) * 0.075
                    const texture = clamp(0.91 + broadTexture + rockGrain, 0.72, 1.05)
                    const lowerWeight = 0.80 + ((1 - depth) * 0.20)
                    const strength = clamp(horizontalWeight
                        * ridgeReveal
                        * mainGully
                        * leftGully
                        * secondaryGully
                        * leftSpine
                        * faceLight
                        * capHighlight
                        * lowerWeight
                        * texture
                        * edgeFade, 0, 1)

                    if (strength < 0.025) continue

                    nextDots.push({
                        x: x + (Math.sin((normalizedX * 113) + (normalizedY * 29)) * 0.45),
                        y: y + (Math.cos((normalizedX * 37) - (normalizedY * 97)) * 0.45),
                        radius: Math.max(0.35, strength * spacing * 0.47),
                        opacity: clamp(0.12 + (strength * 0.88), 0, 1),
                        offsetX: 0,
                        offsetY: 0,
                        scale: 1,
                    })
                }
            }

            dots = nextDots
            scheduleDraw()
        }

        const handlePointerMove = (event) => {
            if (!precisePointer.matches || reducedMotion.matches) return

            const bounds = canvas.getBoundingClientRect()
            pointer.x = event.clientX - bounds.left
            pointer.y = event.clientY - bounds.top
            pointer.active = true
            scheduleDraw()
        }

        const handlePointerLeave = () => {
            pointer.active = false
            scheduleDraw()
        }

        const handleMotionPreference = () => {
            pointer.active = false
            scheduleDraw()
        }

        const resizeObserver = new ResizeObserver(buildDots)
        const visibilityObserver = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting
            if (isVisible) scheduleDraw()
        })

        resizeObserver.observe(container)
        visibilityObserver.observe(container)
        container.addEventListener('pointermove', handlePointerMove)
        container.addEventListener('pointerleave', handlePointerLeave)
        reducedMotion.addEventListener('change', handleMotionPreference)
        buildDots()

        return () => {
            isDestroyed = true
            if (animationFrame !== null) window.cancelAnimationFrame(animationFrame)
            resizeObserver.disconnect()
            visibilityObserver.disconnect()
            container.removeEventListener('pointermove', handlePointerMove)
            container.removeEventListener('pointerleave', handlePointerLeave)
            reducedMotion.removeEventListener('change', handleMotionPreference)
        }
    }, [theme])

    return (
        <div
            ref={containerRef}
            role="img"
            aria-label="A halftone mountain illustration made from interactive dots"
            className="absolute inset-x-0 bottom-0 h-2/5 md:inset-x-auto md:right-0 md:top-0 md:bottom-auto md:h-full md:w-3/4 overflow-hidden pointer-events-none md:pointer-events-auto"
        >
            <canvas
                ref={canvasRef}
                aria-hidden="true"
                className="h-full w-full"
            />
        </div>
    )
}
