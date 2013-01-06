# Problem 3 - Largest Prime Factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

http://projecteuler.net/problem=3

## The solution

Took me longer than I thought it would take to solve this problem. The basic algorithm is as follows:

1. Check to see if the smallest prime greater than 1 is a factor of n
2. If it's not, get the next smallest until you have a factor n
3. Divide n by that prime
4. If the result is a prime, then you have your answer :D
5. If not, go to step 1 with the new value of n
