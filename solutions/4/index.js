var
  isPal = function(n){
    // Palindromic numbers must be divisible by 11
    if (n % 11 !== 0) return false;

    // Compare outside digits
    n = ("" + n).split("");
    while (n.length > 1) if (n.pop() !== n.shift()) return false;

    return true;
  }
;

module.exports = function(){
  var n1 = 999, n2 = 999, greatest = 0, current;

  // Super brute force
  for (var i = n1; i >= 900; i--){
    for (var j = n2; j >= 900; j--){
      current = i * j;
      if (isPal(current) && current > greatest) greatest = current;
    }
  }

  return greatest;
};