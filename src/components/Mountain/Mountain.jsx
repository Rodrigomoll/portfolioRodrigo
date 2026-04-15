import Image from "next/image"
import mountainImg from '@/assets/mountain.png'

const snowflakes = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 8 + 5}s`,
    animationDelay: `${Math.random() * 10}s`,
    size: Math.random() > 0.7 ? '3px' : '2px',
}))

export default function Mountain() {
    return (
        <div className="absolute inset-x-0 bottom-0 h-2/5 md:inset-x-auto md:right-0 md:top-0 md:bottom-auto md:h-full md:w-3/4 overflow-hidden bg-black">
            <Image
                src={mountainImg}
                alt="Andes Mountain"
                fill
                className="object-cover object-top"
                style={{
                    mixBlendMode: 'screen',
                    filter: 'contrast(1.3) brightness(1.1)'
                }}
            />
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: flake.left,
                        width: flake.size,
                        height: flake.size,
                        animationDuration: flake.animationDuration,
                        animationDelay: flake.animationDelay,
                    }}
                />
            ))}
        </div>
    )
}