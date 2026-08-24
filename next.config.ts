import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  serverExternalPackages: ['@whiskeysockets/baileys', 'jimp', 'sharp'],
};

export default nextConfig;
