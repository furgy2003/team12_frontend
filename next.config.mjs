/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: 'http://localhost:8080/api/:path*',
        // destination:
        //   "https://team12-backend-code-to-give-ca637a425bb3.herokuapp.com:5000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
  
