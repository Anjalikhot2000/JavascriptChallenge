//DOM
//Document object Model

//DOM manipulation
//ID
let button=document.getElementById("myId");
console.dir(button);


//Class
let h=document.getElementsByClassName("myClass");
console.dir(h);

//tag
let para=document.getElementsByTagName("p");
console.dir(para);

//Query Selector
let ele=document.querySelector("p");
console.dir(ele);

let all=document.querySelectorAll("p");
console.dir(all);

let c=document.querySelectorAll(".myClass");
console.dir(c);

let id=document.querySelectorAll("#myId");
console.dir(id);

console.dir(document.body.firstChild);
console.dir(document.querySelector("h1"));

console.dir(document.querySelector("div").children);


