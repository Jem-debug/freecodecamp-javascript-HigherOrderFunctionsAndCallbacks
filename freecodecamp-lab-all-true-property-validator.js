const truthCheck = (collection, pre) => {
  let isTrue = true;

  for(let i = 0; i < collection.length; i++){
      if(!(collection[i][pre])){
         return false;
      }
  }

  return isTrue;
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: true}, {name: "Naomi", role: "", isBot: " "}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
