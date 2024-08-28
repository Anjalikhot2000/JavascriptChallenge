let mbtn=document.querySelector("#mode");
let heading=document.querySelector("h1")

mbtn.addEventListener("click",()=>{
    console.log("You are trying to change mode");
    if(document.body.style.backgroundColor==="black"){
        document.body.style.backgroundColor="white";
        heading.style.color="black";
    }
    else{
        document.body.style.backgroundColor="black";
        heading.style.color="aqua";
    }
})