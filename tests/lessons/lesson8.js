

// Declarative Function
function helloOne() {
    console.log("Hello One")
}
helloOne()

// Anoymus Function
var helloTwo = function () {
    console.log("Hello Two")
}
helloTwo()

// Arrow Function
var helloThree = () => {
    console.log("Hello Three")
}
helloThree()

// Function with Arguments
function multpleByTwo(number) {
    var result = number * 2
    return result
}
var myResult = multpleByTwo(10)
console.log(myResult)

// import function
import { printAge } from './Helper/printHelper.js'
printAge(7)

// import Everything
import * as helper from './Helper/printHelper.js'
helper.printAge(10)
