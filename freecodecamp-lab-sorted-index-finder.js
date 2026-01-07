const getIndexToIns = (arr, num) => {

   const filtered = arr.filter(number => number < num).sort((a,b) => a-b);

   const getFirstIndex = filtered.findIndex(number => number < num)

   return filtered.length;
   
}

console.log(getIndexToIns([5, 4, 1, 3, 4], 2));
