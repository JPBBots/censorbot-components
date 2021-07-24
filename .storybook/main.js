const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  stories: [
    "../src/__stories__/**/*.@(stories|story).@(js|jsx|ts|tsx)",
    "../src/views/**/*.@(stories|story).@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  typescript: {
    check: false,
    checkOptions: {},
  },
  webpackFinal: async (config, { configType }) => {

    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json")
      })
    ];

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
}
