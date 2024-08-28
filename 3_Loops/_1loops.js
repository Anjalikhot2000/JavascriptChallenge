// //for loop
// for (let i=0; i<=5;i++){
//     console.log(i);
// }

// //Calculate sum of n
// let n=prompt("Enter a number");
// let sum=0;
// for (i=1;i<=n;i++){
//     sum+=i;
// }
// console.log(sum);


//  //while loop
// let i=0;
// while(i<=5){
//     console.log("Hello");
//     i++;
// }

// // Do while
// i=2;
// do{
//     console.log("Hi");
// }while(i==0);

// // for-of loop -srtings or array
// str="Anjali";
// for (let char of str){
//     console.log(char);
// }

// str="JavaScript";
// let size=0;
// for (let i of str){
//     console.log(i);
//     size++;
// }
// console.log(size);

//for in loop - objects and arraays

let Student={
    Name:"Anjali",
    id:1104,
    isPass:true,

};
for (let i in Student){
    console.log(i,Student[i])
}