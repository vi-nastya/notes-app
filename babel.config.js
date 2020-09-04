module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
        root: ['.'],
        alias: {
          '~': '.',
        },
      },
    ],
    'jest-hoist',
  ],
}
