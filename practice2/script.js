let divs=document.querySelectorAll(".box");
// divs[0].innerText="Hello";
// divs[1].innerText="Hi";
// divs[2].innerText="Yo";
for(div of divs){
    div.innerText=prompt("enter a unique value")
}