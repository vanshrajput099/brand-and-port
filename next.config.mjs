/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    experimental: {
        fontLoaders: [
            {
                loader: '@next/font/google',
                options: { subsets: ['latin'], display: 'swap' },
            },
        ],
    },
    trailingSlash: true
};

export default nextConfig;