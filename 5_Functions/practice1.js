function vowelsCount(str){
    let count=0;
    v=["a","e","i","o","u"];
    a=str.toLowerCase()
    for(let i=0;i<str.length;i++){
        for (let j=0;j<v.length;j++){
            if (a[i]===v[j]){
                count++;
            }
        }
    }
        return count;
}
console.log(vowelsCount("Anjali"));


let arrowVowels=(str)=>{
    let count=0;
    v=["a","e","i","o","u"];
    a=str.toLowerCase()
    for(let i=0;i<str.length;i++){
        for (let j=0;j<v.length;j++){
            if (a[i]===v[j]){
                count++;
            }
        }
    }
        return count;
}
console.log(arrowVowels("Rupesh"));