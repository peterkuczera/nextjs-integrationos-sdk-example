import os from "os"
import path from "path"

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer, webpack, nextRuntime }) => {
    if (isServer) {
      config.externals.push(/^@integrationos\/node-/);
    }

    return config
  },
};

export default nextConfig;
