const Student={
    name:"Anjali",
    age:20,
    marks:99,
    printMarks: function(){
        console.log("marks: ",this.marks);
    }
}
Student.printMarks();

const Employee={
    calTax(){
        console.log("the tax is 10%");
    }
}
const karanArjun={
    salary:500000,
};
karanArjun.__proto__=Employee;