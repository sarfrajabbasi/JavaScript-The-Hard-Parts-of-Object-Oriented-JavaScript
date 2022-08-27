/*
Interlude --> We have another way of running a function that
allow us to control the assignment of this
*/
const obj = {
num: 3,
increment: function(){this.num++;}
};
const otherObj = {
num: 10
};
obj.increment(); // obj.num now 4
obj.increment.call(otherObj); // otherObj.num now 11
// obj.increment.apply(otherObj);

/* 
this always refers to the object to the left of the dot on which the function (method) is
being called - unless we override that by running the function using .call()
or .apply() which lets us set the value of this inside of the increment function
*/