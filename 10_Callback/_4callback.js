function getData(dataId,getNextData){
    setTimeout(()=>{
    console.log("data",dataId);
    if(getNextData){
    getNextData();}
},2000);
}
//callbackhell-nested callback(Pyramid of doom)
// getData(1,getData(2));
getData(1,()=>{
    getData(2,()=>{
        getData(3)
    })
})