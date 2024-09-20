function getData(dataId){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(dataId);
        resolve("sucess")
    })
})
}

// console.log("Fetching data")
// getData(1).then((res)=>{
//     console.log(res)
//     console.log("Fetching data")
//     getData(2).then((res)=>{
//         console.log(res)
//     })
// })

getData(1).then((res)=>{
    return getData(2)
}).then((res)=>{
    console.log(res)
})