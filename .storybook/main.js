const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  stories: [
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

    return config;
  },
}
