const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development', // Modo dinámico
    entry: './src/index.js', // Punto de entrada
    output: {
      filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js', // Nombre del bundle
      path: path.resolve(__dirname, 'dist'), // Carpeta de salida
      publicPath: '/', // Ruta base para los recursos
      clean: true, // Limpia la carpeta dist en cada build
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'), // Sirve archivos desde dist
      },
      compress: true, // Compresión Gzip
      port: 3000, // Puerto del servidor de desarrollo
      hot: true, // Hot Module Replacement (HMR)
      historyApiFallback: true, // Para React Router
      open: true, // Abre el navegador automáticamente
    },
    module: {
      rules: [
        // Regla para JavaScript y JSX
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        // Regla para SCSS
        {
          test: /\.scss$/,
          use: [
            'style-loader', // Inyecta CSS en el DOM
            'css-loader', // Interpreta @import y url()
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  loadPaths: [
                    path.resolve(__dirname, 'src/styles'), // Añade la ruta de los archivos SCSS
                  ],
                  quietDeps: true, // Silencia advertencias de Bootstrap
                },
              },
            },
          ],
        },
        // Regla para CSS
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        // Regla para imágenes y archivos estáticos
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      // Plugin para generar el archivo HTML
      new HtmlWebpackPlugin({
        template: './public/index.html', // Plantilla HTML
        filename: 'index.html', // Nombre del archivo de salida
        favicon: './public/favicon.ico', // Ruta al favicon
        minify: isProduction
          ? {
              removeComments: true, // Elimina comentarios
              collapseWhitespace: true, // Elimina espacios en blanco
              removeRedundantAttributes: true, // Elimina atributos redundantes
              useShortDoctype: true, // Usa <!DOCTYPE html> corto
              removeEmptyAttributes: true, // Elimina atributos vacíos
              removeStyleLinkTypeAttributes: true, // Elimina type="text/css" de <link>
              keepClosingSlash: true, // Mantiene la barra diagonal en elementos autocerrados
              minifyJS: true, // Minifica JavaScript embebido
              minifyCSS: true, // Minifica CSS embebido
              minifyURLs: true, // Minifica URLs
            }
          : false, // No minificar en desarrollo
      }),
      // Plugin para copiar archivos estáticos (como CNAME)
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public/favicon.ico', to: '' }, // Copia el favicon a la raíz de dist
          { from: 'public/CNAME', to: '' }, // Copia el archivo CNAME a la raíz de dist
          { from: 'public/assets', to: 'assets' }, // Copia la carpeta assets
        ],
      }),
    ],
    optimization: {
      minimize: isProduction, // Minimiza solo en producción
      minimizer: [
        new TerserPlugin({
          // Minimiza JavaScript
          terserOptions: {
            compress: {
              drop_console: true, // Elimina console.log
            },
          },
        }),
        new CssMinimizerPlugin(), // Minimiza CSS
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'], // Extensiones que Webpack resolverá automáticamente
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map', // Source maps
  };
};
