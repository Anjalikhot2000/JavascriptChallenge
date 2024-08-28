let marks=prompt("Enter your marks");
if (marks>=80 && marks<=100){
    console.log("Your garde is A with ",marks);
}
else if (marks>=70 && marks<=79){
    console.log("Your garde is B with ",marks);
}
else if (marks>=60 && marks<=69){
    console.log("Your garde is C with ",marks);
}
else if (marks>=59 && marks<=50){
    console.log("Your garde is D with ",marks);
}
else if (marks>=0 && marks<=49){
    console.log("Your grade is F with ",marks);
}
else{
    console.log("Invalid marks");
}