const input = process.argv.slice(2)
console.log(input)
let index = 0

const reverseArg = (argument) => {
  const newArray = []
  const result = []
  for (let arg of argument) {
    newArray.push([])
    for (let i = arg.length; i >= 0; i--) {
       if(arg[i]){
         newArray[index].push(arg[i])
       } 
    
  }
  index += 1
}

console.log(newArray)
for (let arguments of newArray) {
  result.push(arguments.join(""))
}
console.log("outcome:", result)
}

reverseArg(input)