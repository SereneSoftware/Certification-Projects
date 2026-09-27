function convertCtoF(tempInC) {
  let tempInF;
  tempInF = tempInC * (9/5) + 32;
  return tempInF;
}

console.log(convertCtoF(0))
console.log(convertCtoF(-30))
console.log(convertCtoF(-10))
console.log(convertCtoF(20))
console.log(convertCtoF(30))