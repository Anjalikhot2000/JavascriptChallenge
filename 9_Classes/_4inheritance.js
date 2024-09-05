class Person{
    constructor(){
        this.species="Homo sapiens"
    }
    eat(){
        console.log('eating');
    }
    sleep(){
        console.log('sleeping');
    }
}
class Engineer extends Person{
    work(){
        console.log('solve problems');
    }
}
let anjali= new Engineer();
anjali.eat();
anjali.sleep();
anjali.work();
console.log(anjali.species);