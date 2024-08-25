/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // destination: 'http://localhost:5000/api/:path*',
        // destination: 'https://team12-backend-code-to-give-ca637a425bb3.herokuapp.com/api/:path*',
        destination: 'https://sleepy-woodland-35400-5cdfb9a5b9a7.herokuapp.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
