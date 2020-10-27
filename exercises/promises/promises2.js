/**
 * Requirements:
 *
 *  Create a wait() function that receive a number that represents
 *  the delay time in ms.
 *
 *  Create a add() function that receives two numbers as params and
 *  return the sum of these ones.
 *    Notes:
 *      1. The params should require an special processing, so we
 *      we need to pass each one to a clean() function that emulates an async procedure
 *
 * Exercises:
 *
 *  1. Create a function getSum20 that returns a 20 as result.
 *  2. Create a function getOperation100 that returns 100 as result
 *    Notes:
 *      1. You only can use numbers between 0 and 10
 *       2. Maybe we need to a new function to help us
 *  3. This exersice have two parts:
 *    1. Lets create a function called add5() that receives a number as a param
 *       and return a sum of this one with 5
 *    2. Create a function called getSum25() that returns 25 as a result.
 *
 * Remember that all the solutions must be done using promises!! Enjoy it!
 */

// General functions

function wait(delay) {
  //sets a wait time. of course, only if we do it synchronously. (Await)
  //setTimeout(function(){},delay);

  //El setTimeout no es una promise en si
  //LO DE DANIEL:
  return new Promise((resolve) => setTimeout(() => resolve(), delay));
}

function clean(number) {
  //Basically makes this number a promise.
  //return new Promise((resolve) => setTimeout(() => resolve(number), 0));
  //return new Promise((resolve) => resolve(number));
  

  /*
  If we did this, we would be getting Promise { <pending>} Because value is what the wait returns.

  return wait(1000).then((value) => value
  );
  */

  //LO DE DANIEL:
  return wait(1000).then(() => number);

  //En lo de daniel, estamos esperando al wait y regresamos el numero.


}

function add(x, y) {
  //Makes the two passed numbers async and waits for the operation to resolve.
  //return new Promise((resolve) => resolve(clean(x) + clean(y)));

  //LO DE DANIEL
  return Promise.all([clean(x), clean(y)]).then(([x,y]) => x + y);

  //Ahora 
  
}

/*
 * Exercise 1
*/

function getSum20() {
  //return new Promise((resolve) => resolve(10 + 10)); // <- Funciona pero no es el punto
  
  //LO DE DANIEL:
  return add(10,10);

}

//EJEMPLO DE DANIEL:
//getSum20().then(console.log);

/**
 * Exercise 2
 */

function multipy(x, y) {
  //Makes the two passed numbers async and waits for the operation to resolve.
  //return new Promise((resolve) => resolve(clean(x) + clean(y)));

  //LO DE DANIEL
  return Promise.all([clean(x), clean(y)]).then(([x,y]) => x * y);

  //Ahora 
  
}

function getOperation100() {
  return multipy(10,10)
}


/**
 * Exercise 3
*/

//Hacer una funcion factory que genere funciones

function addFactory(add){
  return function(num){
    return add + num;
  }
}

function add5(num) {
  return add(num,5)
}

const add6 = addFactory(6);


function getSum25() {
  //When it resolves it gives you 25
  return new Promise((resolve) => resolve(25));
}

module.exports = {
  getSum20,
  getOperation100,
  getSum25,
};
