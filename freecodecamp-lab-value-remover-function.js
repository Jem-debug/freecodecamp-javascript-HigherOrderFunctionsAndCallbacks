const destroyer = (arr, ...args) => {
   let argument = [...args];

   return arr.filter(item => !argument.includes(item));
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
