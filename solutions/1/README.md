# Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

[http://projecteuler.net/problem=1](http://projecteuler.net/problem=1)

## The solution

I've completely generalized this solution to find the sum of any number of multiples below any number. So you could do:

```javascript
problem1([3, 5], 999);
// Or
problem1([3, 5, 7, 11], 99999999);
```

Using summations in this problem makes it pretty darn easy. The formula for a summation is:

```
n (n + 1)
---------
    2
```

But since we're doing multiples of 3 and 5, we have to do a little finagling. The maximum value if we were doing it by multiples of 1 would 999. But the maximum value for multiples of 3 is ```999 / 3```. So we can generalize this by saying for any multiple x, the maximum value we want is ```1000 / x```. But for the case of 3, if we sum all numbers from 1 to 333, our result is not what we want. What we really want is

```
3*1 + 3*2 + 3*3 + 3*4 + ... + 3*333
```

Using some simple fucking algebra, we can factor out a 3 from the sum to produce the form that we can easily compute.

```
3 * (1 + 2 + 3 + 4 + ... + 333)
```

Cool so we should be able to do:

```
3 * sum(333) + 5 * sum(199)
```

AHA! No you cannot you dirty bastard. We've added 15 twice, and 30 twice, and 45 twice...

You've got to subtract out the intersection of these two sets. Easy enough:

```
3 * sum(333) + 5 * sum(199) - 15 * sum(66)
```

Now this is uper easy to generalize.
