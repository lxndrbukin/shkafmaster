const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/auth', '/register'],
    createProxyMiddleware({
      target: 'http://localhost:5000' || 'https://5000-lxndrbukin-shkafmaster-yyd05ttu5s7.ws-eu47.gitpod.io',
    })
  );
};
