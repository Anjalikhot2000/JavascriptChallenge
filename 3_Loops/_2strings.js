// String is a sequence of characters
let str1="Anjali";
console.log(str1); //Output: Anjali
let str2='Khot';
console.log(str2); // Output: Khot
console.log(str1.length); // Output: 6
console.log(str1[5]); //Output: i

s=`This is template literal`;
console.log(s); // Output: This is template literal
console.log(`This is str1 ${str1}`); // string interpolation


// escape characters
s=("Anjali\tKhot")
console.log(s); 
console.log(s.length);

//String methods
/*str.toUpperCase()
str.toLowerCase()
str.trim(): removes white space
*/
let str="Anjali   "; 
console.log(str.toUpperCase()); //ANJALI 
console.log(str.toLowerCase()); //anjali 
console.log(str.trim()); //Anjali
console.log(str.slice(1,4)); //nja

let s1="Anjali";
let s2=" Khot";
console.log(s1.concat(s2)); //Anjali Khot

s="abcdcf";
console.log(s.replace("c","a"));
console.log(s.replaceAll("c","a"));

s="IloveJS";
console.log(s.charAt(3));


 

