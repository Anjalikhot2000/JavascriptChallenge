function aSync1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data1")
            resolve("Success")
        },4000)
    })
}

function aSync2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data2")
            resolve("Success")
        },4000)
        })
}

console.log("Fetching data1")
let p1=aSync1();
p1.then((res)=>{
    console.log(res)
    console.log("Fetching data2")
    p2=aSync2()
    p2.then((res)=>{
        console.log(res)
    })
})

// console.log("Fetching data2")
// let p2=aSync2();
// p2.then((res)=>{
//     console.log(res)
// })