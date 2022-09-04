const path = require("path");

module.exports = {
  webpack: {
    configure: webpackConfig => {

      // ts-loader is required to reference external typescript projects/files (non-transpiled)
      webpackConfig.module.rules.push({
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, '../your/local/path'),
          path.resolve(__dirname, '/node_modules/your-local-package-name'),
        ],
        options: {
          transpileOnly: true,
          configFile: 'tsconfig.json',
        },
      })

      return webpackConfig;
    }
  }
};