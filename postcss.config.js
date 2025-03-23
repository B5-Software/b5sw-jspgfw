module.exports = {
  plugins: [
    require('postcss-preset-env')({
      features: {
        'nesting-rules': true,
        'custom-properties': true
      }
    }),
    require('autoprefixer')
  ]
};