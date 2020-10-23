const { HTTPGateway: API } = require("../gateway/HTTPGateway");

const createOrder = (config) => API.post("newOrder", config);
const getOrderInfo = (orderId) => {
  return API.get("getOrder", { ":id": orderId }).then(({ data }) => {
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

module.exports = {
  createOrder,
  getOrderInfo,
};
