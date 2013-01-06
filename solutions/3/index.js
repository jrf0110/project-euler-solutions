var
  /**
   * Determines whether a number is prime or not
   * @param  {Number}  n The number in question
   * @return {Boolean}   Whether or not n is prime
   */
  isPrime = function(n){
    for (var i = 2; i <= n / i; i++) if (n % i === 0) return false;
    return true;
  }

  /**
   * Returns the nth prime
   * @param  {Number} n The index of prime you want
   * @return {Number}   The nth prime
   */
, prime = function(n){
    if (primes[n]) return primes[n];

    if (n === 1) return 1;
    if (n === 2) return 2;

    var i = 2, ithPrime = 3;
    while (i < n){
      while (!isPrime(ithPrime += 2));
      i++;
    }
    return primes[n] = ithPrime;
  }
  // Cache the primes
, primes = []
;

/**
 * Finds the largest prime factor of any number
 * Actually, not any number. There are definitely edge cases I
 * didn't account for
 * @param  {Number} n The number you want to find the largest prime factor of
 * @return {Number}   The largest prime factor of n
 */
module.exports = function(n){
  var i = 2;

  n = n || 600851475143;
  // Discover smallest prime
  while (n % prime(i) !== 0) i++;

  n = n / prime(i);

  if (isPrime(n)) return n;

  return module.exports(n);
};