let list=[1,2,3,4,5,6,7,8,9,10]
let manipulatedList=[]
manipulatedList=list.map(
    (element,index,list)=>{
        return element*10
    }
)
console.log(list)
console.log(manipulatedList)