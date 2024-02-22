const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const JavaScriptObfuscator = require("webpack-obfuscator");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  const commonConfig = {
    entry: {
      main: "./src/index.js",
    },
    output: {
      path: path.resolve(__dirname, "lib"),
      filename: isProduction ? "powerloan.min.js" : "powerloan.js",
    },
    optimization: {
      minimize: isProduction,
      minimizer: isProduction
        ? [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                  drop_debugger: true,
                  pure_funcs: ["console.log"], // Remove console logs
                },
                mangle: true,
              },
            }),
            new JavaScriptObfuscator(
              {
                rotateStringArray: true,
                stringArray: true,
                stringArrayThreshold: 0.75,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 0.75,
                numbersToExpressions: true,
                simplify: true,
                shuffleStringArray: true,
                splitStrings: true,
                stringArrayEncoding: ["rc4"],
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 0.4,
              },
              ["powerloan.min.js"]
            ),
          ]
        : [],
    },
    plugins: isProduction ? [] : [new BundleAnalyzerPlugin()],
    // Set devtool based on the environment
    // devtool: isProduction ? false : 'source-map', // Use 'source-map' for development for better debugging
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };

  return commonConfig;
};
