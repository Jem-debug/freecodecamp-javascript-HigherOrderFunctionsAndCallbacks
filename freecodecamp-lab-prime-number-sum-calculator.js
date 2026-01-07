const sumPrimes = (num) => {
  let numArr = [];

  const isPrime = (n) => {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      numArr.push(i);
    }
  }

  return numArr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumPrimes(10));
