let arrMax=[3,6,54,76,23,87,24]
let max=arrMax[0]
arrMax.forEach(
    (element) => {
    if(element>max){
        max=element
    }
});
console.log(max)