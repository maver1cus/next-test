/** @type {import('next').NextConfig} */

const api = process.env.NESTJS_HOST || "http://localhost:5000";

const nextConfig = {
  rewrites: () => [{ source: "/api/:path*", destination: `${api}/:path*` }],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
