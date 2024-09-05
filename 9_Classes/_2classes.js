class Car{
    constructor(brand,mileage){
        console.log("Creating a new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("Car started");
    }
    stop(){
        console.log("Car stopped");
    }
}

let bmw= new Car("BMW",10);
console.log(bmw)
// bmw.start();
// bmw.stop();