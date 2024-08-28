let items=[250,645,300,900,50];
console.log(items)
let j=0
for(let i of items){
    let dis=(i*10)/100;
    items[j]=i-dis;
    j++
}
console.log(items);
for(let i=0;i<items.length ;i++){
    let dis=(items[i]*10)/100;
    items[i]=items[i]-dis;
}
console.log(items);

