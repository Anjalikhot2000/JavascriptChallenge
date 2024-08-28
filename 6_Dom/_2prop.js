//Properties

//tagName: returns tag for element nodes
//innerText: returns the content of the element annd all its children
//innerHTML: returns the plain text or HTML content in the element
//textContent: returns textual content even for hidden elements

let div=document.querySelector("div");
console.dir(div);
console.dir(div.innerText);

console.dir(div.innerHTML);

// div.innerText="abcd";

let heading=document.querySelector("h1");
console.dir(heading.textContent);

