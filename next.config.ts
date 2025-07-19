/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ✅ 이거 꼭 필요함!
  },
};

module.exports = nextConfig;
