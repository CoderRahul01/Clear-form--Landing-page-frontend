/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000, // 1 year
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8005'}/api/:path*`,
            },
        ];
    },
    async headers() {
        return [
            {
                source: "/videos/:path*",
                headers: [
                    {
                        key: "Accept-Ranges",
                        value: "bytes",
                    },
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
};
module.exports = nextConfig;

