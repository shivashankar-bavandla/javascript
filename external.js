// console.log("Shivashankar")

// let data = "Hello";
//     data = 100;

// console.log("External JS 😎")
// console.log("1")
// console.log("2")
//!Datatypes

// let age = "25";
// console.log(typeof age)

// let str1="shiva";
// let str2=25;
// let str3="Chinnu"
// console.log(str1)
// console.log(typeof str1)
// console.log(str2)
// console.log(typeof str2)
// console.log(str3)
// console.log(typeof str3)

// const isLoggedin = true;
// const youaresleepy = false;
// console.log(isLoggedin)
// console.log(typeof isLoggedin)
// console.log(youaresleepy)
// console.log(typeof youaresleepy)

// 4) Undefined when a variable is declared but not assigned the value
// let age;
// console.log(age)
// console.log(typeof age)

// 5)Null represents intential absence of value

// let age=null;
// console.log(age)
// console.log(typeof null)

// 6)Bigint used to store very large integers beyond the Number limit

// let acctno=12345678900987654321n;
// console.log(acctno)
// console.log(typeof acctno)

// 7)Symbol used to create unique values

// let shiva=Symbol("Shiva")
// let shankar=Symbol("Shiva")
// console.log(shiva)
// console.log(typeof shiva)
// console.log(shiva == shankar)

// Non primitive Datatypes
// Object same like dict that stores in key-value pairs

// let student ={
//     name:"pavan",
//     age:25
// };
// console.log(typeof student)
// console.log(student)

// Array can store multiple values []

// let colors=["red","blue","violet"]
// console.log(colors)
// console.log(typeof colors)

// Functions functions are reusable block of code to perform a specific task

// function greet() {
//     console.log("Shiva")
// }
// greet()
// console.log(typeof greet)

//!Scope
//Global Scope a variable declared outside all the functions and blocks belongs to the globle scope

// let name1="Shiva"
// const name2="Shankar"
// var name3="Chinnu"
// console.log(name1)
// console.log(name2)
// console.log(name3)

//Functions variable declared inside a function
//Accessing inside the function

// function name() {
//     var name="Shiva"
//     console.log(name)
// }
// name()
// function name() {
//     console.log(name1)
//     console.log(name2)
//     console.log(name3)
// }
// name()

//Block variable declared using inside {} are accessible only inside that block

// {
//     console.log(name1)
//     console.log(name2)
//     console.log(name3)
// }

// Lexical Scope
// function outer() {
//     let deccan = "wines"
//     function inner() {
//         console.log(deccan)
//     }
//     inner()
// }
// outer()

//!Operators
//PreIncrement
// let a=10
// console.log(++a)
// console.log(a)
//PostIncrement
// console.log(a++)
// console.log(a)

//predecrement
// console.log(--a)
// console.log(a)

//Postdecrement
// console.log(a--)
// console.log(a)

//Comparision Operator used to compare values >,<,>=,<=,==,===,!=,!==
//!Decision statements are used to make decisions and control the flow of execution
// if statement used to execute a block of code when the condition is true
// let age = 20
// if (age>18) {
//     console.log("Eligible for vote")
// }

// practise

// let number = 10
// if (number = 10) {
//     console.log("Positive number")
// }

// let number = 10
// if (number %2==0) {
//     console.log("Even")
// }
// else {
//     console.log("odd")
// }

// let age = 18
// if (age>=18) {
//     console.log("Eligible for vote")
// }
// else {
//     console.log("not eligible for vote")
// }

// let number = 10
// if (number = 10) {
//     console.log("The number is zero")
// }

// let number = 25 
// if (number %5==0 ) {
//     console.log("divisible by 5")
// }

// let number1 = 20
// let number2 = 30
// if (number1 > number2) {
//     console.log("20 is greater")
// }
// else {
//     console.log("not greater than")
// }

// let marks = 25
// if (marks < 35) {
//     console.log("Fail")
// }
// else {
//     console.log("Pass")
// }

// let number = -5
// if (number = 0) {
//     console.log("zero")
// }
// else if (number >0) {
//     console.log("Positive")
// }
// else {
//     console.log("Negative")
// }

// let number1 = 15
// let number2 = 25
// if (number1<number2) {
//     console.log("25 is the largest")
// }
// else {
//     console.log("15 is the smallest")
// }
//Switch Statement

// let car="AudiA8l"
// switch(car) {
//     case "Taigun":console.log("20l");
//     break;
//     case "Fortuner":console.log("50L");
//     break;
//     case "BMW M340" : console.log("1cr");
//     break;
//     case "BMW M2" : console.log("1.5cr");
//     default : console.log("2.5 Cr")
// }

// let amount = 200
// switch(amount) {
//     case (amount < 100):
//         console.log("benz")
//         break;
//     case (amount < 150) :
//         console.log("BMW")
//     default : console.log("Audi A8L")
// }

//!Loops
// For Loop
// for (i=1;i<=5;i++) {
//     document.writeln("<h1>I am Sorry 😛</h1>")
// }

//While loop
// let j=1
// while (j<=5) {
//     document.writeln("<h1>i have very bad mind </h1>")
//     j++
// }

//Do While loop
// let k=1;
// do {
//     document.writeln("iam worry about my life ")
//     k++
// }while (k<=5)

//For in Loop
// let students = {
//     name: "Shivashankar",
//     age:22,
//     college:"Srre datta college"
// }
// for (let carlover in students) {
//     console.log(students[carlover])
// }

//For of loop
// let str = "Loops"
// let arr = ["Chai", "Biscuit", "Coffee"]
// for (let characters of str) {
//   console.log(characters)
// }

// for (let elements of arr) {
//   console.log(elements)
// }

// let anonymous1 = function() {
//     console.log("I am Anonymous Function 😒")
//  }
// anonymous1()

//Ex 1
// let anonymous = function() {
//     console.log("Hello world")
// }
// anonymous()

//Ex 2
// let anonymous1 = function (a,b) {
//     console.log(a+b)
// }
// anonymous1(10,20)

// let anonymous2 = function (a,b) {
//     if (a % 2 == 0) {
//         console.log("Even")
//     }else {
//         console.log("Odd")
//     }
// }
// anonymous2(8,13)

// let anonymous3 = function(a,b) {
//     if (a<b) {
//         console.log("greater number")
//     }
// }
// anonymous3(25,40)

// let anonymous4 = function(a) {
//     let fact = 1
//     for (i=1; i<=5; i++) {
//         fact = fact + i;
//     }
//     return fact;
// }
// console.log(anonymous4(5));

//Arrow function

//!Context function
// var a = "Hey"
// function demo1() {
//     const c = "How are you ?"
//     console.log(c);
// }
// const demo2 = () => {
//     let b = "There"
//     console.log(a + " " + b)
// }
// demo2()
// demo1()

// let a=10
// var b = 20
// function demo2() {
//     const c = 30
//     console.log(a + b + c)
// }
// demo2()

// Closure function
// console.log("Start")
// function outer () {
//     let a = 10;
//     var b = 20;
//     function inner () {
//         const c = 30;
//         console.log(a+c);
//     }
//     inner();
// }outer();
// console.log("End")

// let a = ["Shiva","Shalini"]
// console.log(a)

//!Arrays
//creating an array
// let fruits = ["Apple","Mango","Banana"]
// var cars = ["BMW","Audi","Benz"]
// console.log(fruits)
// console.log(typeof fruits)

//!objects
// let student = {
//     name:"Shiva",
//     age:22,
//     college:"Sree Dattha college",
//     hobbies:["timepass","overThinking","sleeping","eating"],
//     address:{
//         city:"Kalwakurthy",
//         area:"Hanumannagar"
//     }
// }
// console.log(student)
// console.log(typeof student)

//object constructor
// let biodata = new Object();
// biodata.name = "Shiva"
// biodata.age = 22,
// biodata.college = "Sree Dattha college"
// biodata.hobbies = ["timepass","overThinking","sleeping","eating"]

//!Math object
// console.log(Math.E)

// console.log(Math.PI)

//!Spread operators and rest operators
//copying arrays
// let colors = ["blue","pink","green","Red"]
// let copiedcolors = [...colors]
// console.log(copiedcolors)

//example 2
// let bikes = ["KTM", "RE", "TVS", "BAJAJ"]
// let copiedArray = [...bikes]
// console.log(copiedArray) //['KTM', 'RE', 'TVS', 'BAJAJ']

//merge arrays
// let cars = ["Audi","Benz","BMW"]
// let bikes = ["Apache","Dominor"]
// let vehicles = [...cars,...bikes]
// console.log(vehicles)

//spread operators with objects
// let student = {
//     name:"Shiva",
//     age:22
// }
// let copiedstudent = {
//     ...student
// }
// console.log(copiedstudent)

//merge objects 
// let personal = {
//     name:"Shivashankar",
//     age:22
// }
// let professional = {
//     Job:"Bevarse"
// }
// let merge = {
//     ...personal,...professional
// }
// console.log(merge)

//spread operator with function
// function add(a,b,c) {
//     return a+b+c
// }
// let num = [10,20,30]
// console.log(add(...num))

//Rest parameters
//Rest parameters in function
// function sum(...num) {
//     let sum = 0;
//     for (let value of num) {
//         sum += value
//     }
//     return sum
// }
// console.log(sum(10,20,30,40))


//Array distructing
// let cars = ["BMW","Audi","Benz","Ferrari"]
// let [a,b,c] = cars
// console.log(a)
// console.log(b)
// console.log(c)

//Rest parameter in object Distrucsettion
// let mobiles = {
//     Brand : "Samsung",
//     Model : "S26 Ultra",
//     year : 2026,
//     price:100000
// }
// let {Brand,...otherDetails} = mobiles
// console.log(Brand)
// console.log(otherDetails)

//Settime out and set interval
// setTimeout(() => {
//     document.writeln("<h1>I am in very bad condition </h1>")
// },5000)

// setInterval(() => {
//     document.writeln("Iam very lazy fellow")
// },3000)

