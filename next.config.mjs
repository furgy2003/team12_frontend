/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // destination: 'http://localhost:8080/api/:path*',
        destination: 'https://team12-backend-code-to-give-ca637a425bb3.herokuapp.com/api/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
        port: '',
        pathname: '/assets/**',
      },
      {
        protocol: 'http',
        hostname: 'api.example.com',
        port: '8080',
        pathname: '/thumbnails/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/image/upload/**',
      },
    ],
  },
};

export default nextConfig;
