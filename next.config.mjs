/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // destination: 'http://localhost:8080/api/:path*',
        destination:
          "https://sleepy-woodland-35400-5cdfb9a5b9a7.herokuapp.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
