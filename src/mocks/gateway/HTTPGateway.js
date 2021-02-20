const cryptoRandomString = require("crypto-random-string");
const { getRequestRoute } = require("./routes");

const DELAY = 1000;

const HTTPGateway = (function () {
  let mockOrder = {};

  const get = (service, params) =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({ url: getRequestRoute(service, params), status: 200, data: { ...mockOrder } }),
        DELAY,
      ),
    );

  const post = (service, config) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        mockOrder = {
          id: cryptoRandomString({ length: 5, type: "base64" }),
          ...config,
        };
        return resolve({ url: getRequestRoute(service), status: 201, data: { ...mockOrder } });
      }, DELAY),
    );
  };

  return {
    get,
    post,
  };
})();

module.exports = {
  HTTPGateway,
};
