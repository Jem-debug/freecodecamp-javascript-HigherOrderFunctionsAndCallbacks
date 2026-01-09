const steamrollArray = (args) => {
    return [...args].reduce((accumulator, currentValue) => {
    return accumulator.concat(Array.isArray(currentValue) ? steamrollArray(currentValue) : currentValue);
  }, [])
}

console.log(steamrollArray(([[["a"]], [["b"]]])))
