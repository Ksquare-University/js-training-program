var asyncSumTest = 7;

setTimeout(() => {
  asyncSumTest *= 2;
}, 1000);

function bar() {
  setTimeout(() => {
    asyncSumTest += 7;
  }, 0);
}

function foo() {
  asyncSumTest += 7;
}

setTimeout(() => {
  asyncSumTest /= 2;
}, 0);

setTimeout(() => {
  console.log(asyncSumTest);
}, 1000);

bar();
foo();
