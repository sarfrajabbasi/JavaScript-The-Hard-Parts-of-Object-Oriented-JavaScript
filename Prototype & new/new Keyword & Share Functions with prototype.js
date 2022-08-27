// Complete Solution 3:---

function UserCreator(name,score){
    // access or run the function code:-()
    // access the Object part:-dotnotion
    this.name = name;
    this.score = score;

}
// assign function to protoype property which has sub-empty Object. 

UserCreator.prototype.increment = function(){
    this.score++;;
};

UserCreator.prototype.login = function(){
    console.log("Login");
};

// the new  keyword that mutates the execution context of UserCreator.
// automatically in the local memory,creates big an,old empty object.and refer with this keyword label.
const user1 = new UserCreator("Eva",9);//in the auto-create this object.
user1.increment();

/*
Benefits:----

— Faster to write

— Still typical practice in professional code.

downsides:---

— 99% of developers have no idea how it works and therefore fail interviews

— We have to upper case first letter of the function so we know it requires ‘new’ to work!
*/
