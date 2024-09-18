// Loops
for(let i=0; i<5; i++){
    console.log("Hello !")
}
var cars =["Nissan","Toyota","Volvo",]
for(let car of cars){
console.log(car)
if(car == "Toyota"){
    break
}
}

// ES6 syntax for each loop
cars.forEach ( car => {
    console.log(car)
})