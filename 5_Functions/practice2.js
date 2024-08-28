a=[1,2,3,4,5];
a.forEach(val=>{
    console.log(`${val}=${val**2}`);
})

a.forEach(function printsq(val){
    console.log(`${val}=${val**2}`);
})