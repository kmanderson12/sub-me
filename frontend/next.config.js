const withCSS = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  // tslint:disable-next-line:no-empty
  require.extensions['.less'] = () => {};
  // tslint:disable-next-line:no-empty
  require.extensions['.css'] = () => {};
}

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});
