function api(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data",dataId);
            resolve("Success")
        },2000)
    })
}

// async function weatherReport(){
//     console.log("getting data1....");
//     await api(1);
//     console.log("getting data2....");
//     await api(2);
// }

(async function(){
    console.log("getting data1....");
    await api(1);
    console.log("getting data2....");
    await api(2);
})();