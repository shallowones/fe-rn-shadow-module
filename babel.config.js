module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json', '.ios.ts', '.android.ts', '.ios.tsx', '.android.tsx', '.ts', '.tsx'],
      },
    ],
  ],
}
