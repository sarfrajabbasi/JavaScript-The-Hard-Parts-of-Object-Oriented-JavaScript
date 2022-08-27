// Subcalssing in Solution-4:---
// ES2015 Calss approach

// declare class(it just  a function object combo)
class userCreator{
    // function bit
    constructor (name,score){
        this.name;
        this.score;
    }
    // object bit
    sayName(){
        console.log("I am" + this.name);
    }
    increment(){
        this.score++
    }

}

const user1 = new userCreator('Phil',4);
const user2 = new userCreator('Tim',5);

user1.sayName()

// ------------------------------

class paidUserCreator extends userCreator{
    constructor(paidName,paidScore,accountBalance){
        super(paidName,paidScore);
        this.accountBalance = accountBalance;
    }

    increaseBalance(){
        this.accountBalance++;
    }
}
const paidUse1 = new paidUserCreator("Alyssa",8,25);

paidUse1.increaseBalance();
paidUse1.sayName();