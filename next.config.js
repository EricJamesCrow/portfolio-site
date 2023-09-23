/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['crowdevelopment.s3.amazonaws.com'],
    },
    env: {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    },
  }
  
  module.exports = nextConfig;
  