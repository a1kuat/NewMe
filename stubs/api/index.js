const router = require('express').Router();

module.exports = router;

router.use('/public',
    createProxyMiddleware({
        target: 'https://gateway.marvel.com/v1/public',
        changeOrigin: true,
}))
