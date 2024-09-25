const URL= "https://catfact.ninja/fact"
let factpara=document.querySelector("#fact")
let btn=document.querySelector("#btn")

const getData= async()=>{
    console.log("getting data...")
    let response= await fetch(URL)
    console.log(response) //json format 
    let data=  await response.json()
    console.log(data)
    factpara.innerText=data.fact
}

btn.addEventListener("click",getData)