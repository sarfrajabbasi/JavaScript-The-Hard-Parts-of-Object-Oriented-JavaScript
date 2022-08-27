// Subclassing in Solution-3

// Constructor(pseudoclassical) approach

function userCreator(name,score){
    this.name = name
    this.score = score
}

userCreator.prototype.sayName = function(){
    console.log("I'm" + this.name);
}

userCreator.prototype.increment = function(){
    this.score++;
}

const user1 = new userCreator("Phil",5)
const user2 = new userCreator("Tim",4)

user1.sayName();//"I'm Phil"

// ----Creating a Subclass with a Constructor------

function paidUserCreator(paidName,paidScore){
    userCreator.call(this,paidName,paidScore);
    // userCreator.apply(this,[paidName,paidScore])
    this.accountbalance = accountbalance;

}

paidUserCreator.prototype = Object.create(userCreator.prototype)

paidUserCreator.prototype.increaseBalance =function(){
    this.accountbalance++;
}
const paidUser1 = new paidUserCreator("Alyssa",8,25);

paidUser1.increaseBalance();
paidUser1.sayName()//"I'm Alyssa"