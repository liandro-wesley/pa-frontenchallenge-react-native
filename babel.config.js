module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
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
