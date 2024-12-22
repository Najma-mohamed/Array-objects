//  Object Array

const student = [
    {
        name: "Ahmed",
        Address: {
            street: "taleeh",
            distract: "Hodan",
            region: "Banaadir"
        },
        phone: 612123456,
        age: () => console.log(20),
        subject: ["HTML", "CSS", "JAVASCRIPT"]
    },
    {
        name: "mahamed",
        Address: {
            street: "Jaale-siyaad",
            distract: "AbdiAziiz",
            region: "Banaadir"
        },
        phone: 614673456,
        age: () => console.log(30),
        subject: ["HTML", "CSS", "JAVASCRIPT"]
    },
    {
        name: "Rayaan",
        Address: {
            street: "buuluxubey",
            distract: "Wadajir",
            region: "Banaadir"
        },
        phone: 613423587,
        age: () => console.log(18),
        subject: ["HTML", "CSS", "JAVASCRIPT"]
    },

]
student.map((item) => console.log(item.name, item.age, item.phone))


class product{
    constructor(title,price){
        this.title=title;
        this.price=price;
    }
    displayProduct(){
        return console.log(`product: ${this.title},product price: ${this.price}`)
    }
}
const pr =new product("t.shirt",20)
pr.displayProduct()


// mern strack soo baar.
// javascript classes soo baar
// saddex project ayaa liska rabaa in ladiyaario