const input = process.argv.slice(2)
console.log(input)
let index = 0

const reverseArg = (argument) => {
  const newArray = []
  for (let arg of argument) {
    newArray.push([])
    for (let i = arg.length; i >= 0; i--) {
       if(arg[i]){
         newArray[index].push(arg[i])
       } 
    
  }
  index += 1
}

for (let arguments of newArray) {
  console.log(arguments.join(""))
}
}

reverseArg(input)