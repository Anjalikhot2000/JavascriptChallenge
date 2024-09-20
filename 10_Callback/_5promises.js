// Promises in js is for eventually completion of task. 
// It is an object

// let promise=new Promise((resolve, reject)=>{
//     console.log("I am a promise")
//     //resolve(123);
//     reject("error occurred")
// })

function getData(dataId,getNextData){
    return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dataId);
        resolve("success")
        if(getNextData){
            getNextData();
        }
    },5000)
});
}
let result=getData(123)
