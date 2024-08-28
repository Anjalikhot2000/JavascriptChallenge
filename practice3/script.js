let button=document.createElement("button");
button.innerText="Click me";
button.style.backgroundColor="red";
button.style.color="white";

// let heading=document.querySelector("h1");
// heading.after(button);

document.querySelector("body").prepend(button)