const { HTTPGateway } = require("../gateway/HTTPGateway");

const ordersService = (function (api) {
  const createOrder = (config) => api.post("newOrder", config);
  const getOrderInfo = (orderId) => {
    return api.get("getOrder", { ":id": orderId }).then(({ data }) => {
      // In the practice this is not necessary
      // The API should returns an error and we are going to cacht it
      // in the catch()
      const { id } = data;
      if (id !== orderId) {
        return Promise.reject({ message: "order not found", status: "404" });
      }

      return { foods: data.foods };
    });
  };

  return {
    createOrder,
    getOrderInfo,
  };
})(HTTPGateway);

module.exports = {
  ordersService,
};
