const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise")
        // resolve("Sucess")
        reject("error")
    });
};
let promise=getPromise();
promise.then((res)=>{
    console.log("Promise fulfilled",res)
})
promise.catch((err)=>{
    console.log("Promise rejected",err)
})