const smallestCommons = (arr) => {
  if (arr.length !== 2)
    return "Array must have 2 numbers only";

  if (arr[0] === 0 || arr[1] === 0)
    return 0;

  arr.sort((a, b) => a - b);

  const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

  let result = arr[0];

  for (let i = arr[0] + 1; i <= arr[1]; i++) {
    result = lcm(result, i);
  }

  return result;
};

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
