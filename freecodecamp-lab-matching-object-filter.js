const whatIsInAName = (arr1, arr2) => {
    const sourceKeys = Object.keys(arr2);

     return arr1.filter(obj =>
    sourceKeys.every(key =>
      obj.hasOwnProperty(key) && obj[key] === arr2[key]
    )
  );
}

const collection = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
];

whatIsInAName(collection, { last: "Capulet" });
