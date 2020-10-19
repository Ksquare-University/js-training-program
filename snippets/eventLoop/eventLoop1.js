// Which its going to be the console order?

const foo = () => {
  console.log("2");
};
const array = [7];
array.forEach(() => console.log("1"));
foo();
setTimeout(() => console.log("4"), 0);
console.log("3");
