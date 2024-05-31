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
          options: {
            flags: os.constants.dlopen.RTLD_NOW,
            outputPath: config.output.path
          }
        },
      ],
    });

    // config.resolve.alias["@integrationos/node-darwin-arm64"] = path.resolve(
    //   process.cwd(),
    //   "node_modules/@integrationos/node-darwin-arm64"
    // )

    // config.resolve.alias["@integrationos/node-linux-x64-gnu"] = path.resolve(
    //   process.cwd(),
    //   "node_modules/@integrationos/node-linux-x64-gnu"
    // )

    if (isServer) {
      config.externals.push("@integrationos/node-darwin-arm64")
      config.externals.push("@integrationos/node-linux-x64-gnu")
    }

    return config
  },
};

export default nextConfig;
