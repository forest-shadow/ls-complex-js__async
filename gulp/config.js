module.exports = {
  dist: './dist',
  src: './src',

  paths: {
    dist: './dist',
    src: './src',

    // scss src paths
    scss:           './src/scss',
    scssComponents: './src/scss/components',
    scssMixins:     './src/scss/mixins',
    scssModules:    './src/scss/modules',
    scssPages:      './src/scss/pages',
    scssVendor:     './src/scss/vendor'
  },

  autoprefixerConfig: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1']
};