//objects
var customer ={
fname:"zameer",
lname:"lukman",
car :["Nissan","Toyota","Volvo"]
}
console.log(customer['fname'])

// Dot Notation
customer.fname="maisoon"

// Bracket Notation
customer['lname']="muhamed"
console.log(`${customer.fname}${customer.lname}`)



// Array
var car =["Nissan","Toyota","Volvo"]
console.log(car[1])
car[0] = "BMW"
console.log(car[0])
console.log(customer.car[2])