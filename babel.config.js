module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@presentation': './src/presentation',
          '@data': './src/data',
          '@domain': './src/domain',
          '@infra': './src/infra',
          '@main': './src/main',
          // '@shared': './src/shrared',
        },
      },
    ],
  ],
};
