// console.log("Abhay");
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// const { property } = require("lodash")

// console.log("Welcome to Programiz!");
// const array = [1,2,3,4,5,6,7,8];
// for(let i=0;i<array.length;i++){
//     setTimeout(function(){
//         console.log(array[i])
//     },1000);
// }









// #Question for implement deeplynested array into single array 

// const deeplyNestedArray = [1, 2,[1 , 2], [2, [3, [4, [5]]]]];

// const completelyFlatArray = deeplyNestedArray.flat(Infinity);
// console.log(completelyFlatArray); 

// #normal map function

// const array = [1,2,3,4,5,6,90];
// const squareNumber = array.map((num)=>{
//     let squareNumber = num*num;
//     return squareNumber;
    
// })
// console.log(squareNumber)








// The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

// If (" ") is used as separator, the string is split between words.

// const words = ["Abhay" , "pratap"];
// const letters = words.flatMap((word)=>{
//     let result = word.split("");
//     return result
// })
// console.log(letters)











//Foreach function 
// The forEach method does not return a new array like other iterators such as filter , map and sort . Instead, the method returns undefined itself


// const array = [1,2,3,4,5,6,7,8,9];
// console.log(array)
//  array.forEach((val,index)=>{
//      const final = val*val
//  array[index]=final
// })
// console.log(array)











// rest parameter

// const sum = (...params)=>{
//     console.log(params);
//     var total = 0;
//     for(i of params){
//         total = total + i;

//     }
//     console.log(total);

// }
// sum(1,2,3,4,5,7)











// spread oprator 

// function sum (a , b){
//     return a+b;
// }
// var array = [2,5];
// console.log(sum(...array))







// const obj = {
//     name:"Abhay",
//     age:"21"
// };
// let user = obj;
// user.name = "Pratap";
// console.log(obj)

// In this above code user ne obj ka refrence copy kar liya hai data copy nahi kiya that's why jabb hum user ko modify kar rahae hai toh woh object mei bhi same changes kar raha hai .and is code mei object call by refrence copy hua hai .



// let x = "Abhay";
// let y = x;
// y= "Pratap";
// console.log(x)

//In the above code jab humne x  variable  ko y variable mei assign kiya toh uski value assign hui na ki uska refrence 




//Shallow copy ek solution provide karta hai jisse hum jab apne object ko kisi variable mei assign karte hai and us variable ki help se modify karte hai toh changes reflect nahi hone chaihey .



// const obj = {
//     name:"Abhay",
//     age:"21"
// };
// let user = Object.assign({},obj);
// user.name = "Pratap";
// console.log("Object",obj);
// console.log('variable' , user)

// The above code is an example of shallow copy jisme humne obj ki value par kaam kia na ki uski value par .



//Method 2 to use shallow copy


// const obj = {
//     name : "Abhay"
// };
// let user = {...obj};
// user.name = 'Pratap';
// console.log("Object" , obj);
// console.log("variable" , user)

// const obj = [
//    { name :"Abhay"}
// ];
// let user = {...obj};
// user.name = 'Pratap';
// console.log("Object" , obj);
// console.log("variable" , user)


// NOTE:- Shallow copy bass ek label tak he value copy karat hai uske baadd usme same memory refrences copy hone start hoo jate hai .





// const obj = {
//     name : "Abhay",
//     employeeDetails :{
//         empId:"V6066",
//         location:"Noida",
//         bloodGroup :"B+"
//     }
// };
// let user = {...obj};
//  user.employeeDetails.bloodGroup = "O+";
//  console.log("User",user)
//  console.log("obj" , obj)

// In this above code when you uncomment this code you can clear see some changes in the obj becuase of shallow copy so iss problem ko tacle karne k liye humare pass aatta hai deep copy ka concept jiski help se hum apne object me ekk leavel deep tak ja kar values ko copy kar rahe hote hai .






// example 1 of deep copy 

// const obj = {
//     name :"Abhay Pratap Singh",
//     EmpDetails :{
//         empId:"V6066",
//         address:"Noida",
//         certified:true
//     }
// };
// // const user1 = JSON.stringify(obj)
// const user = JSON.parse(JSON.stringify(obj));
// // console.log(user)
// // console.log(user1)
// user.EmpDetails.certified = false;
// console.log("Obj",obj);
// console.log("user" , user)





// yea cheez jabb kaam nahi karegi jaab apke pass ek function bhi ho object mei .

// const obj = {
//     name :"Abhay Pratap Singh",
//     EmpDetails :{
//         empId:"V6066",
//         address:"Noida",
//         certified:true
//     },
//     getData:function(){
//         return Date.now()
//     }
// };
// let user = JSON.parse(JSON.stringify(obj));

// user.EmpDetails.certified = false;
// console.log("Obj",obj);
// console.log("user" , user)





//output :- 
// Obj {
//     name: 'Abhay Pratap Singh',
//     EmpDetails: { empId: 'V6066', address: 'Noida', certified: true },
//     getData: [Function: getData]
//   }
//   user {
//     name: 'Abhay Pratap Singh',
//     EmpDetails: { empId: 'V6066', address: 'Noida', certified: false }
//   }

// Means user mei function nahi mill ra hai .


//example 2 for deepcopy

// var _ = require('lodash');
// const obj = {
//     name :"Abhay Pratap Singh",
//     EmpDetails :{
//         empId:"V6066",
//         address:"Noida",
//         certified:true
//     },
//     getData:function(){
//         return Date.now()
//     }
// };
// let user = _.cloneDeep(obj)

// user.EmpDetails.certified = false;
// console.log("Obj",obj);
// console.log("user" , user)



// output:-  deep clone karne k liye hai yea tarika 

// Obj {
//     name: 'Abhay Pratap Singh',
//     EmpDetails: { empId: 'V6066', address: 'Noida', certified: true },
//     getData: [Function: getData]
//   }
//   user {
//     name: 'Abhay Pratap Singh',
//     EmpDetails: { empId: 'V6066', address: 'Noida', certified: false },
//     getData: [Function: getData]
//   }
//   [nodemon] clean exit - waiting for changes before restart


// Map :- The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.


// const map1 = new Map();
// map1.set('a' , 1);
// map1.set('b', 2);
// map1.set('c', 3);
// console.log(map1)
// console.log(map1.get("a"))


// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).


// let obj = {
//     name :"Abhay",
//     city :"Noida"
// };
// // console.log(typeof obj)
// obj.city= "Hyderabad"
// // console.log(obj)


// let data = new Map([
//     ['name' , 'Abhay'],
//     [true , "This is the bool key in map"]
// ])
// // console.log(typeof data) //object


// // data.set(true , "this is key");
// // console.log(data.keys())

// data.forEach((values , keys)=>{
//     console.log("keys" , keys , "value" , values);
// })











// function* simpleGeneratorFunction(){
//     console.log("function called");
//     let x = 1000;
//     yield "first step";
//     yield x;
//     yield 100;
// }

// let result = simpleGeneratorFunction();
// console.log(typeof result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());


//Output
// function called
// object
// { value: 1000, done: false }
// { value: 100, done: false }
// { value: undefined, done: true }

// A function* declaration creates a GeneratorFunction object. Each time when a generator function is called, it returns a new Generator object, which conforms to the iterator protocol. When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value, as a boolean.

// function* simpleGeneratorFunction(){
//     let i = 1000;
//     while(true){
//         i++
//         yield i
//     }
// }
// let sg = simpleGeneratorFunction();
// function getnewId(){
//     console.log(sg.next());
// }

//is code se hum id generate kar sakte hai .






///////////Example of prototype



// let user = {
//     getFullName : function(){
//         return this.name+" "+this.lastName
//     },
//     getAge :function(){
//         let age = new Date().getFullYear()- this.birth;
//         return age
//     }
// }
// let student = {
//     name : "Abhay Pratap",
//     lastName :"Singh",
//     birth:2001

// }

// let teacher = {
//     name : "Rishi",
//     lastName:"Kumar",
//     birth : 1980

// }

// student.__proto__ = user;
// teacher.__proto__=user;

// console.log(student.getAge());
// console.log(teacher.getAge());
// console.log(student.getFullName())

// The Above code is the example of prototype :- prototype is the mechanism in which objects can inherit the featurs of another object







/////////////Example without prototypes





// let student = {
//     name : "Abhay Pratap",
//     lastName :"Singh",
//     birth:2001,
//     getFullName:function(){
//         return this.name+" "+this.lastName
//     },
//     getAge:function(){
//         let age = new Date().getFullYear() - this.birth;
//         return age
//     }

// }

// let teacher = {
//     name : "Rishi",
//     lastName:"Kumar",
//     birth : 1980,
//     getFullName:function(){
//         return this.name+" "+this.lastName
//     },
//     getAge:function(){
//         let age = new Date().getFullYear() - this.birth;
//         return age
//     }
// }

// console.log(student.getAge());
// console.log(student.getFullName());
// console.log(teacher.getAge());
// console.log(teacher.getFullName());

// The above code clearly shows code duplicacy which to remove this duplicacy we use prototype which helps to inherits the featurs from one function to another function







// let user = {
//     getFullName : function(){
//         return this.name+" "+this.lastName
//     },
//     getAge :function(){
//         let age = new Date().getFullYear()- this.birth;
//         return age
//     }
// }
// let student = {
//     name : "Abhay Pratap",
//     lastName :"Singh",
//     birth:2001,
//     getAge:user.getAge

// }

// let teacher = {
//     name : "Rishi",
//     lastName:"Kumar",
//     birth : 1980,
//     getAge:user.getAge

// }


// console.log(student.getAge());
// console.log(teacher.getAge());


// kaam Aise bhi ho sakta hai but jab aap teacher and student k functions ko load karte hai toh getAge wali calculations automatically call ho jata hai toh isse code ki efficiency par effect hota hai . yea wala method hum jab use karte hai jab koi chote mote features inheriate karate hai .

Object.prototype.myData = function(){
    return "custom Function"
};
let x = {};
console.log(x.myData())