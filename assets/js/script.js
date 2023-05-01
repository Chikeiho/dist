console.log("Yam")

// console.log("Hello world")
// var number=29
// console.log(number)
// console.log(number)
// console.log(number)
// console.log(number)
// console.log(number)


// var name="Blessing"
/*Variable can have any name but can not start with numbers or character
--Variables should be stored with names that relates the values inside the variable*/


// CONCATENATION
// console.log(10.5  + "Pamela")
// or
// console.log(number +name)
// console.log('How are you ' + name) 
// console.log('How are you ' + name + ", Hope you are fine?") 

// Mathematical Operators
//  Addition +
//  Subtraction -
//  Multiplication *
//  Division /
//  Power ** or ^
//  Modulus %

//  The above are fundamental operators, others are derived from them.

// console.log(5+2)

// var first_number=5
// a single equal sign is called an assignment operator, it assigns a value to a variable
// var second_number=2
// var sum=first_number % second_number
// console.log(sum)
// console.log("The output is " + sum)

// CONDITIONAL STATEMENTS(AND LOGICAL STATEMENTS)
// They are made up of if…else conditions/statements



// Conditional Operators: 
// Greater Than >
// Less Than <
// Greater than or equal to >=
// Less than or equal to <=
// Equal to ==
// Equal to === says equal to both with the data type
// e.g "5"===5 will give an error because the to data types are different
// Not equal to !=



// If Statement: 
// if(3 > 5) {
//     console.log("It is False")

// }else{
//     console.log("it is false")
// }
// var num1= 8
// var num2= 12
// if(num1> num2) {
//     console.log(num1 +" is greater than" + num2)

// } else {
//     console.log(num2 +" is greater than " + num1)
// }




//If else statement
var age = prompt('Please enter your age');
if (age == 18){
  console.log("You are allowed")
} else if(age==20){
  console.log("You are allowed")
}else if(age==22) {
  console.log("You are allowed")
} else {
  console.log("Gerrarahia")
}




// Logical operators in IF ELSE STATEMENTS &&(and) || (or)
// var age = 30;
// if( age ==18 || age ==20 || age==20) {
//     console.log('You are allowed')
// } else {
//     console.log('Gerrarahia mehhnnnnn')
// }




//Nested IF ELSE STATEMENTS - IF ELSE STATEMENTS inside another IF ELSE Statements
// var age = 17;
// var level = 'jss3';
// if (age >= 18 && level == 'jss3'){
//     console.log('You are qualified')
// } else {
//     console.log('Gerarahia meeehhhn')
// }

// var username = 'John';
// var password = '123';
// if (username == 'John' && password == 'jss3'){
//     console.log('You are logged in')
// } else {
//     console.log('Gerarahia meeehhhn')
// }
//This style will not give you the details that are not correct

// var username = 'John';
// var password = '123';
// if (username == 'John') {
//     if(password =='123'){
//         console.log('You are logged in')
//     }else{
//         console.log('Incorrect Password')
//     }
// }else {
//     console.log('Please supply your correct username')
// }



//   A  R  R A Y
// var names = ['Aijay', 'Ugo', 'Tita', 'Chike', 14, 15];
// names[5] = 'Mum'; //Setting up an array
// names[4] = 'Dad';
// console.log(names)
// console.log(names[5]) //retrieving data from an array
// console.log(names[4])
// console.log(names.length)



//M U L T I      D I M E N S I O N A L     A R R A Y
// var names = ['Aijay', 'Ugo', 'Tita', 'Chike', 14, 15, ['Casmire', 'Kelvin', 'Chiamaka', 'Eddie',['Someje','Mini-Dad']]];
// names[5] = 'Mum'; //Setting up an array
// names[4] = 'Dad';
// console.log(names)
// console.log(names[6][2])
// console.log(names[6][4][0])



// L O O P 
// F O R    L O O P
// for(var i = 0; i < 100 ; i+=3){
//     console.log('Times running', i)
// }

// var names = ['Aijay', 'Ugo', 'Tita', 'Chike', 14, 15];
// for(var i = 0; i < 6 ; i++){
//     console.log(names[i])
// }



// O B J E C T S  
// var person = {
//     age: 27, 
//     hair: 'black', 
//     height: 'tall', 
//     likes:['food','driving','traveling'],
//     hobbies:{football:'Once a day',movies:'Once a week'}
// }
// console.log(person)
// person.age = 30;
// console.log(person.age)
// console.log(person)
// console.log(person.age, person.height)
// console.log(person.likes)
// console.log(person.likes[1])
// console.log(person.likes)
// console.log(person.hobbies.movies)



//F U N C T I O N S

// function add(){
//     var x = 3;
//     var y = 4;
//     var sum = x + y;
//     console.log(sum)
// }

// add()
// add()
// add()

// function sum(x, y){
//     var sum = x + y;
//     console.log(sum)
// }
// sum(20,1)
// sum(52,89)

// function sayname(name){
//     console.log('My name is ', name)
// }

// sayname('Chike')

// function checkreturn(x, y){
//     var sum = x + y;
//     console.log(sum)
//     return 100;
// }

// console.log(checkreturn(0,0))