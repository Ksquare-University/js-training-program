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


const API_URL = "https://api.test.com";
const routes = {
  newOrder: "/order",
  getOrder: "/order/:id",
};


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


/**
 * The final exercise! This is easy one.
 *
 * We are going to emulate a hamburger order process!
 *
 * Exercise:
 *
 *  Inside of mocks/ is a order service file that is exporting an object with two functions:
 *    1. createOrder(). Receives an object with a food param that contains an array with the
 *      name of all the foods in the order
 *    2. getOrderInfo(). Receive an order id and returns an object if match with the created one
 *
 *  Our task is create a function called waitingForMyHamburger() that emulates a boring waiting
 *  process between the creation of the order and finally getting out food. This function should
 *  have inside two boring activities that console info related to the suffer.
 *
 *  After create this function, create a one called newOrderFoodProcess(), and emulates all the
 *  order process including the waiting!!
 *
 */

//const { ordersService } = require("../mocks/services/orders");

//console.log(ordersService);

ordersService.createOrder();

function wait(delay) {
  return new Promise((resolve) => setTimeout(() => resolve(), delay));
}

function wating() {
  //Is this callback hell??
  //This is all called at the same time....
  //Each wait is as if it was individual, it's the same as if we did not nest this. Which is annoying. Whyyyy should not the .then(wait until it's over).
  /*
  wait(1000).then(
    () => console.log("Checking my phone")
  ).then(
    wait(2000).then(
      () => console.log("Look a bug!")
    ).then(
      wait(3000).then(
        () => console.log("IT CAN FLY!")
      ).then(
        wait(4000).then(
          () => console.log("RUUUUNNNNNN")
        )
      )
    )
  )
  */

  //I'll try to do it so that it only runs after the previous one is over.
  //IT WOOOORKKSSSS
  wait(1000).then( () =>{
    console.log("Waited 1");
    wait(1000).then(
      () => {
        console.log("Waited 2");
      }
    )
  }
  )
  

}



function newOrderFoodProcess() {
  createOrder();
  wating();
  getOrderInfo();
}

module.exports = {
  newOrderFoodProcess,
};
