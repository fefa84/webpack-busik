const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about.html",
      inject: true,
      chunks: ["index"],
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/booking.html",
      inject: true,
      chunks: ["index"],
      filename: "booking.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contact.html",
      inject: true,
      chunks: ["index"],
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/offer.html",
      inject: true,
      chunks: ["index"],
      filename: "offer.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/pricing.html",
      inject: true,
      chunks: ["index"],
      filename: "pricing.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/testimonials.html",
      inject: true,
      chunks: ["index"],
      filename: "testimonials.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/documents.html",
      inject: true,
      chunks: ["index"],
      filename: "documents.html",
    }),
  ],
};
