let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(company);
//remove first company from array
company.shift();
console.log(company);
//remove uber and ola in its place
let key="Uber";
for (let i=0;i<company.length;i++){
    if(company[i]==key){
        company.splice(i,1,"ola");
        break;
    }
}
console.log(company);

// Add amazon at the end
company.push("Amazon");
console.log(company);