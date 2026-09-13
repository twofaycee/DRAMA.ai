
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare compatible
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}
module.exports = nextConfig
