// OBJECT ORIENTED PROGRAMMING
// ENCAPSULATION
// POLYMORPHISM

class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
}

const solomon = new BankAccount('Solomon Sunday', 4000);
const lois = new BankAccount("Lois Betty", 6000);

console.log(solomon.balance);
console.log(lois.balance);












// let user = {
//     name: "Faith",
//     location: "Lagos",
//     nationality: "Nigerian"
// };

// for(let key in user) {
//     console.log("i am " + user[key]);
// }

// var mei = "kolor"

// console.log(`i am ${mei}`);