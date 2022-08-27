// subclassing in Solution-2:------>

/*
Factory function approach:--

// this is a FINE_GRAINED CONTROLED VERSION

--> this is factory functions,couz it produce Objects.

--> there is no automation ,all work here doing manually.

 1.make empty object
 2.make bond with other function(userFunction)

 creating a specific type of user 
 */

function userCreator(name, score) {
    //  link to userFunctions and create empty object:- Object.create().

  const newUser = Object.create(userfunctions);
// maually add argument in property.
  newUser.name = name;
  newUser.score = score;

//   retrun object all by  hand
  return newUser;
}

// shared functions sets 

userfunctions = {
  sayName: function () {
    console.log("I'm" + this.name);
  },
  increment: function () {
    this.score++;
  },
};

// this bond with userFunctions
const user1 = userCreator("Phil", 5);
user1.sayName(); //"I'm phil";


// ----

// creating a more specific type of user by this factory functions
function paidUserCreator(paidName, paidScore, accountBalance) {

    // Use userCreator function's use inside the paidUserCreator to create our new paid user.
  const newPaidUser = userCreator(paidName, paidScore);

/*---> we use build in function setProtoTypeOf().
 
  ---> we want that newPaidUser,it's proto reference is gonna be to the paidUserFunctions.*/

//   switch out this newpaidUSer __proto__ to paidUSeFunctions.
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);

//   add new property :--
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}
/* Why not call it set proto of? But why? Cuz technically they call anything that's referenced from proto the prototype of this object. But it's referenced through something called proto. It's profoundly confusing. If there were not a property elsewhere called prototype that is something totally different, which we saw earlier, maybe not so confusing.

[00:03:55]
But where there is literally property as well as prototype, it seems crazy to me that you would say set prototype of, when it is explicitly not setting a property equal prototype, is explicitly sending a property called, proto. Now in the spec it technically calls this property, even more confusingly, prototype with two square brackets around it, which is different to the prototype property.*/


// new set of shared functions
// paidUser can access both shared functions but user1 is not.
const paidUserFunctions = {
  increaseBalance: function () {
    this.accountBalance++;
  },
};


// that gonna reference to paidUserFunctions proto to userFunctions(link both)
Object.setPrototypeOf(paidUserFunctions, userFunctions);

const paidUser1 = paidUserCreator("Alyssa", 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName(); //"I'm Alyssa"

