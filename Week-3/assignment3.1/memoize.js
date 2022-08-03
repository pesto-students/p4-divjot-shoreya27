//Memoization is a technique of optimising the function to get
//previous executed output of the function by using cache

function memoize(fn) {
  let cache = new Map();
  function caching(...args) {
    console.log(cache);
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));

    return cache.get(key);
  }
  return caching;
}

function fib(a) {
  if (a <= 1) {
    return 1;
  }
  return fib(a - 1) + fib(a - 2);
}
function timeCalc(arg) {
  console.time(String(arg));
  console.log(memo(arg));
  console.timeEnd(String(arg));
}

let memo = memoize(fib);

timeCalc(30); //Not Present in Cache, will take time & put in cache
timeCalc(30); //present in cache, so will not compute the function
timeCalc(35);
timeCalc(35);
timeCalc(45);
timeCalc(45);
