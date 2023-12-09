const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
 app.use(
   '/public',
   createProxyMiddleware({
     target: 'http://gateway.marvel.com/v1',
     changeOrigin: true,
   })
 );
};