const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  navigations: {
    'newme.main': '/newme'
  },
  features: {
    'newme': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "NewMe.apiBaseUrl": "https://gateway.marvel.com/v1/public/",
    //"NewMe.apiBaseUrl": "/api/public",
    "NewMe.apiPublicKey": "0ac8d7f75061bb01ebb6d09606f79aa4",
    "NewMe.apiPrivateKey": "47e7f668f6f584e3d14e87d413cdf7dec79ea50e"
  }
}
