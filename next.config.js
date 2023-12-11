// next.config.js
module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(wav)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      })
  
      return config
    },
  }