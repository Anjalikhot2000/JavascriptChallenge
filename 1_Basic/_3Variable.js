fullName="Tony Stark"; //string
age=24; //integer
price=25.5; //decimal
a=null;
y=undefined;
isFollow=true; //bool
console.log(fullName);
console.log(age);
console.log(price);
console.log(a);
console.log(y);
console.log(isFollow);

//var,let and const
//let: Variable cannot be re-declared but can be updated. A block scope variable

let name="Tony Stark";
let ab=22;
//let age=30; cant re-declare
console.log(name);
console.log(ab);


//var: Variable can be declared  and a global scope variable
//not a proper way of programming
var a=20;
var a=39;
console.log(a); //output:39

//const:cannot be re-declared or updated. A block scope variable.
const pi=3.142
console.log(pi); //output:3.142

let b=24;
console.log(typeof(b));

//object
const Student={
    fullname:"Anjali",
    age:23,
    cgpa:8.5,
    isPass:true
};
console.log(Student);
console.log(Student["fullname"]);
console.log(Student.fullname);
