let btn1=document.querySelector("#btn1");
// btn1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

// let box=document.querySelector("#box");
// box.onmouseover=()=>{
//     console.log("mouse is over the box");
// }

//eventListener
//node.addEventListener(event,callback)

btn1.addEventListener("click",(e)=>{
    console.log("btn1 was clicked- handler1");

});

btn1.addEventListener("click",(e)=>{
    console.log("btn1 was clicked- handler2");

});
const handler3=()=>{
    console.log("btn1 was clicked- handler3");
};
btn1.addEventListener("click",handler3);

btn1.addEventListener("click",(e)=>{
    console.log("btn1 was clicked- handler4");

});

//eventRemoveListener
btn1.removeEventListener("click",handler3);
