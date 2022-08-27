const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.increment = function(){
    user3.score++;
};

/*Our code is getting repetitive, we're breaking our DRY principle
And suppose we have millions of users!
What could we do?*/