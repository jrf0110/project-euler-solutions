var
  fib = function(n){
    if (fibs[n]) return fibs[n];
    if (n < 3) return fibs[n] = 1;
    return fibs[n] = fib(n - 1) + fib(n - 2);
  }

  // cache solutions
, fibs = []
;

/**
 * Given a maximum value, will sum all fibonacci numbers whose value
 * do not exceed the maximum
 * @param  {Number} max The maximum value of the fibonacci number
 * @return {Number}     The sum
 */
module.exports = function(max){
  var total = 0, n = 0;

  max = max || 4000000;

  while ((total += (++n % 3 != 0) ? fib(n) : 0) < max);

  return total;
};