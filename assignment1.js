//Greatest Common Divisor (GCD) of two numbers using conditionals in JavaScript:

function getGCD(a, b) {
  let gcd = 1;
  for(let i = 1; i <= a && i <= b; i++) {
    if(a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}


//First twelve prime factors of a number using conditionals in JavaScript:

function getPrimeFactors(num) {
  let factors = [];
  let divisor = 2;
  while (num >= 2 && factors.length < 12) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}


//Check if a number is even or odd using conditionals in JavaScript:

javascript
function isEven(num) {
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


//Factorial of a number using conditionals in JavaScript:

function getFactorial(num) {
  let factorial = 1;
  if(num === 0 || num === 1) {
    return factorial;
  }
  for(let i = num; i >= 2; i--) {
    factorial *= i;
  }
  return factorial;
}


//FizzBuzz using conditionals in JavaScript:

function fizzBuzz(num) {
  if(num % 3 === 0 && num % 5 === 0) {
    return "FIZZBUZZ";
  } else if(num % 3 === 0) {
    return "FIZZ";
  } else if(num % 5 === 0) {
    return "BUZZ";
  } else {
    return num;
  }
}