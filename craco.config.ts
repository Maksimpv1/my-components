module.exports = {
    webpack: {
      configure: {
        module: {
          rules: [
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
          ],
        },
      },
    },
  };