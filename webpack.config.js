const path = require(`path`);
const {CleanWebpackPlugin} = require(`clean-webpack-plugin`);

module.exports = {
  context: path.resolve(__dirname, `source`),
  mode: `development`, // Режим сборки
  entry: {
    main: `./js/main.js`,
    vendor: `./js/vendor.js`,
  }, // Точка входа приложения
  output: {// Настройка выходного файла
    filename: `[name].js`,
    path: path.join(__dirname, `build/js`),
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        
      },
    ],
  },
};
