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
    "NewMe.apiPublicKey": "99f249b7070a2e4cc1a49513d6065289",
    "NewMe.apiPrivateKey": "375757c2f7b7462e446837bceedbc801a5349ff8"
  }
}
