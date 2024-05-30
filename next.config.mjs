import os from "os"

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer, webpack, nextRuntime }) => {

    // BigInt.prototype["toJSON"] = function () {
    //   return this.toString();
    // };
    // console.log(`config: ${JSON.stringify(config.output, null, 2)}`)

    config.module.rules.push({
      test: /\.node$/,
      use: [
        {
          loader: "nextjs-node-loader",
          options: {
            flags: os.constants.dlopen.RTLD_NOW,
            outputPath: config.output.path,
            includeWebpackPublicPath: true
          }
        },
      ],
    });
    return config
  },
};

export default nextConfig;
