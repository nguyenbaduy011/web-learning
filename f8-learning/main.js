// function writeLog (testMessage)
// {
//     console.log(testMessage);
// }

// writeLog('sech')

// function sum(a, b){
//     console.log(a + b);
// }

// sum(10, 20);

// function triple(x)
// {
//     console.log(x);
// }

// function sum(a, b) {
//     return a+b;
// }

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(10, 20));

// function triple(x) {
//     return x * 3;
// }

// function triple(x) {
//     return x * 3;
// }
// var result = triple(10)
// console.log(result)

// function declarationFunction(){
//     console.log('declarationFunction')
// }

// var expressionFunction = function(){
//     console.log('expressionFunction')
// }

// var myName = 'Nguyen Ba Duy'

// console.log(myName.length)

// const email = 'email'







// var myName = 'Nguyen Ba Duy'
// console.log(myName.indexOf('Ba', 10))
// console.log(myName.slice(4, 10))

// function getUpperCaseName(name)
// {
//     return name.toUpperCase()
// }
    
// // Expected results:
// console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
// console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"



// function isNumber(value){
//     if (value === Number(value))
//     return true    
//     else return false
// }

// // Expected results:
// console.log(isNumber(999)); // true
// console.log(isNumber('abc')); // false
// console.log(isNumber('100')); // false

// var mangas = ['berserk', 'onepiece', 'GTO'];
// console.log(mangas)



// function joinWithCharacter(array, charactor) {
//     return array.join(charactor);
// }

// // Ví dụ khi sử dụng
// var cars = ['Honda', 'Mazda', 'Mercedes'];

// var result = joinWithCharacter(cars, ' - ');

// console.log(result); // Expected: "Honda - Mazda - Mercedes"

// function getLastElement(x){
//     return x.slice(-1, 0);
// }

// // Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']



//object trong js
// var myInfo = {
//     name: 'Nguyen Ba Duy',
//     age: 20,
//     email: 'email'
// }

function User(name){
    this.name = name;
    this.age = name;
}

var user1 = new User('Duy')

console.log(user1)