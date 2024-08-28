let name=prompt("Enter your full name");
let a=name.trim()
a= name.replaceAll(" ","");
let len=a.length;
let username= "@"+a.toLowerCase()+len;
console.log(username);