/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.NEXT_EXPORT === "1" ? "export" : undefined,
};

module.exports = nextConfig;
