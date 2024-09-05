class User{
    constructor(name,email){
        this.name = name;
        this.email=email;
    }
    viewData(){
        console.log(`Name: ${this.name}\nEmail: ${this.email}`);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
}
    editData(email){
        this.email=email;
    }
}
u=new Admin("Anjali","anjalikhot5268@gmail.com");
u.viewData();
u.editData("abc@gmail.com");
u.viewData()
