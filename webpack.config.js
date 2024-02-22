const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const JavaScriptObfuscator = require("webpack-obfuscator");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env) => {
  // Parsing custom arguments
  const isProduction   = env.mode    === "prod";
  const isLight        = env.type    === "light";
  const shouldMinify   = env.minify  === "true";
  const shouldAnalyze  = env.analyze === "true";
  const outputPath     = `lib/powerloan${isProduction ? "-prod" : "-dev"}${isLight ? "-light" : ""}${shouldMinify ? "-min" : ""}/`;
  const outputFileName = `powerloan${isProduction ? "-prod" : "-dev"}${isLight ? "-light" : ""}${shouldMinify ? ".min" : ""}`;
  const entryFile      = `./src/index${isLight ? "-light" : ""}.js`;

  const commonConfig = {
    mode: isProduction ? 'production' : 'development',
    entry: {
      main: entryFile,
    },
    output: {
      path: path.resolve(__dirname, outputPath),
      filename: outputFileName + ".js",
    },
    optimization: {
      minimize: shouldMinify,
      minimizer: shouldMinify
        ? [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                  drop_debugger: true,
                  pure_funcs: ["console.log"],
                },
                mangle: true,
              },
              extractComments: true, // Set to true to generate LICENSE.txt files (3rd party licenses)
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
              [outputFileName + ".js"]
            ),
          ]
        : [],
    },
    plugins: [
        // Conditionally add BundleAnalyzerPlugin based on shouldAnalyze
      ...(shouldAnalyze ? [new BundleAnalyzerPlugin({
        openAnalyzer: false,    // Opens the report in browser or not
        analyzerMode: 'static', // Explicitly set the mode to 'static'
        generateStatsFile: true, // Add this line
        reportFilename: outputFileName + '.js.report.html',
      })] : [])
    ],
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
