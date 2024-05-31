import os from "os"
import path from "path"

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer, webpack, nextRuntime }) => {
    config.module.rules.push({
      test: /\.node$/,
      use: [
        {
          loader: "nextjs-node-loader",
        },
      ],
    });

    if (isServer) {
      config.externals.push(/^@integrationos\/node-/);
    }

    return config
  },
};

export default nextConfig;
