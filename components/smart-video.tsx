'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SmartVideoProps {
    src: string;
    poster?: string;
    aspectRatio?: string;        // e.g. "16/9" or "9/16"
    maxWidth?: string;           // e.g. "100%" or "380px"
    className?: string;
    rounded?: string;            // tailwind class e.g. "rounded-2xl"
}

/** Detect an effectively slow network connection */
function useIsSlowConnection(): boolean {
    const [slow, setSlow] = useState(false);
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const conn = (navigator as any).connection;
        if (!conn) return;
        const check = () => {
            const type: string = conn.effectiveType ?? '';
            setSlow(conn.saveData === true || type === 'slow-2g' || type === '2g');
        };
        check();
        conn.addEventListener('change', check);
        return () => conn.removeEventListener('change', check);
    }, []);
    return slow;
}

export default function SmartVideo({
    src,
    poster,
    aspectRatio = '16/9',
    maxWidth = '100%',
    className = '',
    rounded = 'rounded-2xl',
}: SmartVideoProps) {
    const isSlow = useIsSlowConnection();

    return (
        <div
            className={`relative w-full overflow-hidden ${rounded} ${className}`}
            style={{
                aspectRatio,
                maxWidth,
                margin: maxWidth !== '100%' ? '0 auto' : undefined,
                boxShadow: '0 20px 60px -10px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.4) inset',
                border: '1px solid rgba(0,0,0,0.06)',
            }}
        >
            {isSlow && poster ? (
                /* Slow connection: render static poster, no video download */
                <Image
                    src={poster}
                    alt="Product preview"
                    fill
                    className="object-cover"
                    priority={false}
                />
            ) : (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={poster}
                    className="w-full h-full object-cover"
                >
                    <source src={`${src.replace('.mp4', '')}.webm`} type="video/webm" />
                    <source src={src} type="video/mp4" />
                </video>
            )}
            {/* Subtle glass overlay */}
            <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-white/8 via-transparent to-transparent" />
        </div>
    );
}
