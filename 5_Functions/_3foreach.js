//also called as callbackfunction
//arr.forEach
//it id a function to execute for each element in the array

let a=[1,,2,3,4,5];
a.forEach(function printVal(val){
    console.log(val);
});
a=["Bangaluru","Pune","Mumbai"];
a.forEach((val,idx,a)=>{
    console.log(val,idx,a);
});