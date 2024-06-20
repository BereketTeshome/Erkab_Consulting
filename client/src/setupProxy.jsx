import createProxyMiddleware from "http-proxy-middleware";
// eslint-disable-next-line no-undef
module.exports = function (app) {
  app.use(
    "/server",
    createProxyMiddleware({
      target: "https://erkabconsulting.com",
      changeOrigin: true,
    })
  );
};
