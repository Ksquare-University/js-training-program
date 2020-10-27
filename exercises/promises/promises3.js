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

function wait(delay) {
  return new Promise((resolve) => setTimeout(() => resolve(), delay));
}

function wating() {

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

function newOrderFoodProcess(foods) {
  //createOrder();
  //wating();
  //getOrderInfo();
  return wait(1000).then( () =>{
    return (`Finally!! My order is: ${foods.join(",")}`)}
    );
}

module.exports = {
  newOrderFoodProcess,
};
