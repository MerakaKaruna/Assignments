let numbers=[4,-4,10,203,53,11]
let minValue=numbers.reduce(
    (a,b)=>Math.min(a,b)
)
console.log(minValue)