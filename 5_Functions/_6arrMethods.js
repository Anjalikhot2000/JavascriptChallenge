//map:creates a new array with the results of some operation.The value its callback return are used to perform new arrat

let nums=[67,55,33];

nums.map((val)=>{
    console.log(val);
})

let a=nums.map((val)=>{
    return val;
})
console.log(a);


//Filter: Creates a neww array of elements that give true for condition

a=[2,3,4,5,6]
let even=a.filter((val)=>{
    if (val%2==0)
        return val
});
console.log(even);


//Reduce:Performs some operations and reduces the array to a single value.It returns single value
a=[1,2,3,4];
let output=a.reduce((res,current)=>{
    return res+current;
});
console.log(output);

let max=a.reduce((res,curr)=>{
        return res>curr?res:curr;
});
console.log(max);

