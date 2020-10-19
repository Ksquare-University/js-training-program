const API_URL = "https://api.test.com";
const routes = {
  newOrder: "/order",
  getOrder: "/order/:id",
};

const getRequestRoute = (service, params = {}) => {
  const serviceRoute = routes[service];

  if (Object.entries(params).length === 0) {
    return serviceRoute;
  }

  return Object.keys(params).reduce((acc, param) => acc.replace(acc, params[param]), serviceRoute);
};

module.exports = {
  getRequestRoute,
};
