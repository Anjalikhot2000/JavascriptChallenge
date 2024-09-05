class Person{
    constructor(name){

        this.name=name
    }
    eat(){
        console.log('eating');
    }
}
class Engineer extends Person{
    constructor(branch,name){
        super(name);
        this.branch=branch
    }
    work(){
        super.eat();
        console.log('solve problems');
    }
}

let anjali=new Engineer("IT","Anjali");
console.log(anjali.name);
anjali.work();