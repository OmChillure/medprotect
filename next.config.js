/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:8000/api/:path*'
            : 'https://mediflask.vercel.app/api/:path*', // Ensure this is your Flask app's URL
      },
    ];
  },
};

module.exports = nextConfig;
