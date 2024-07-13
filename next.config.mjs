/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'rose-magic-mandrill-283.mypinata.cloud',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
        ]
    },
};

export default nextConfig;
