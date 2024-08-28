//push():add element to end 
let fruits=["apple","banana","mango","pineapple"];
fruits.push("Grapes","Litchi");
console.log(fruits);

//pop(): delete the item
let d=fruits.pop();
console.log(d);
console.log(fruits.toString());

let marks=[99,98,77,66];
console.log(marks.toString());

//concat():joins multiple arrays
let avengers=["Ironman","Thor","Spiderman"];
let dc=["Superman","Batman"];
let ind=["Shaktiman"];
let c=avengers.concat(dc,ind);
console.log(c);

//unshift():add to start
avengers.unshift("Black Widow");
console.log(avengers);

//shift():delete from start
d=avengers.shift();
console.log(d);
console.log(avengers);


//Slice():returns a piece of the array
console.log(avengers.slice(0,2));

//splice():change original array(add,remove,replace)
console.log(avengers);
avengers.splice(0,1,"Captain America");
console.log(avengers);