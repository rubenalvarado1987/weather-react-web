// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 1. Modo de Webpack: 'development' para desarrollo, 'production' para producción
  mode: "development", // O 'production'

  // 2. Punto de entrada de tu aplicación
  entry: "./src/index.js", // Asegúrate de que este sea el archivo principal de tu React app

  // 3. Configuración de la salida de los bundles
  output: {
    path: path.resolve(__dirname, "dist"), // Donde se guardarán los archivos empaquetados
    filename: "bundle.js", // Nombre del archivo JS empaquetado
    clean: true, // Limpia el directorio 'dist' antes de cada build
  },

  // 4. Módulos (Loaders): Cómo Webpack procesa diferentes tipos de archivos
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Aplica este loader a archivos .js y .jsx
        exclude: /node_modules/, // Excluye la carpeta node_modules
        use: {
          loader: "babel-loader", // Usa babel-loader para transpilar
        },
      },
      {
        test: /\.css$/, // Para archivos CSS
        use: ["style-loader", "css-loader"], // style-loader inyecta el CSS en el DOM, css-loader interpreta @import y url()
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Para imágenes
        type: "asset/resource", // Webpack 5: maneja assets como imágenes
      },
    ],
  },

  // 5. Plugins: Para realizar tareas más complejas o inyectar funcionalidades
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Ruta a tu archivo HTML de plantilla
      filename: "index.html", // Nombre del archivo HTML de salida en 'dist'
    }),
  ],

  // 6. Resuelve extensiones de archivos para no tener que escribirlas
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // 7. Configuración del servidor de desarrollo
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Directorio desde donde servir archivos estáticos
    },
    compress: true, // Habilita la compresión Gzip
    port: 3000, // Puerto para el servidor de desarrollo
    open: true, // Abre el navegador automáticamente al iniciar el servidor
    hot: true, // Habilita Hot Module Replacement (HMR)
    historyApiFallback: true, // Para aplicaciones de una sola página (SPA) con React Router
  },
};
