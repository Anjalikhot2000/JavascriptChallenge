const URL= "https://dog.ceo/api/breeds/image/random"


const getData= async()=>{
    console.log("getting data...")
    let response= await fetch(URL)
    console.log(response)
}