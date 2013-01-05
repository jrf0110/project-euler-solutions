var
  sum = function(n){
    return ((n * (n + 1)) / 2);
  }
;

/**
 * Sums natural numbers up to a given maximum (inclusive) that are
 * multiples of a given array of numbers
 * @param  {Number} max  The maximum value you want your sum to go up to
 * @param  {Array}  nums What you want your multiples to be
 * @return {Number}      The sum
 */
module.exports = function(max, nums){
  var total = 0;

  max   = max   || 999;
  nums  = nums  || [3, 5];

  // Add sums of nums
  for (var i = nums.length - 1; i >= 0; i--){
    total += nums[i] * sum(parseInt(max / nums[i]))

    // Subtract the overlaps
    for (var n = i - 1; n >= 0; n--){
      console.log("subtract sum of %s up to %s", nums[i] * nums[n], parseInt(max / (nums[i] * nums[n])));
      total -= (nums[i] * nums[n]) * sum(parseInt(max / (nums[i] * nums[n])));
    }
  }

  return total;
};