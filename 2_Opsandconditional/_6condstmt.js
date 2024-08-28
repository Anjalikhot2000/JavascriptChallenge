//if stmt

let age=25;

if(age>=18){
    console.log("You can vote");
}
if(age<18){
    console.log("You canmot vote");
}
 

//if-else stmt
let mode="dark";
let color;
if (mode==="dark"){
    color="black";
}
else{
    color="white";
}
console.log(color)

//eveOdd
let num=5;
if (num%2==0){
    console.log(num+" is even");
}
else{
    console.log(num+" is odd");
}

//else-if

let m="dark";
let c;
if (mode=="dark"){
    c="black";
}else if(mode=="red"){
    c=red;
}else{
    c=white;
}
console.log(c)

//ternary operator
let urage=25; 
let a=urage>=18?"Adult":"Not adult";
console.log(a)

//Switch:
const expr="banana";
switch(expr){
    case "apple":
        console.log("Apple");
        break;
    case "banana":
        console.log("Banana");
        break;
    default:
        console.log("Not a fruit");
} 