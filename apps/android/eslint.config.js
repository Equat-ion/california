// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    settings: {
      'import/core-modules': [
        'class-variance-authority',
        'expo-dev-client',
        'nativewind',
        'rn-icon-mapper',
      ],
    },
  },
]);
