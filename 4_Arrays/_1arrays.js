// Arrays
//Collection of similar items

let m=[99,22,33,10];
console.log(m,typeof(m));
for(let i=0;i<m.length;i++){
    console.log(m[i]);
}

for (let i of m){
    console.log(i);
}

let stud={
    name:["Ram","Shyam"],
    age:[20,21],
};
console.log(stud.name[0]);
let n=[];
for(i=0;i<stud.name.length;i++){
    n[i]=stud.name[i];
}
console.log(n);