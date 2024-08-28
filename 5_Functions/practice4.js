n=prompt("enter the size of the array");
a=[];
for(i=0;i<n;i++){
    a.push(i+1);
    // num=prompt("enter an element")
    // num=Number(num);
    // a.push(num)
}
console.log(a)
let sum=a.reduce((res,curr)=>{
    res=Number(res);
    curr=Number(curr);
    return res+curr;
});
console.log(sum);

let prod=a.reduce((res,curr)=>{
    return res*curr
});
console.log(prod);