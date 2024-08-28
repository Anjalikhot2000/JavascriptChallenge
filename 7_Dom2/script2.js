// DOM Manipulation
//node.append(el)
//node.prepend(el)
//node.before(el)
//node.after(el)
//node.remove()

let button=document.createElement("button");
button.innerText="Click me"
console.log(button);

let div=document.querySelector("div");
// div.append(button);
//div.prepend(button);
//div.before(button);
//div.after(button);

let heading=document.createElement("h1");
heading.innerHTML="<i>Hi, I am Anjali!</h1>";

document.querySelector("body").prepend(heading);

let p=document.querySelector("p");
p.remove()