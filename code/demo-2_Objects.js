'use strict'; 
(function() {
// Video 3 - Using object literals to create javascript objects
  let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 17, 
    isAdult: function() {return person.age >=18;}
    
  };
  let person1 = {
    firstName: 'Craig',
    lastName: 'Cooper'
  }

  //person.age = 18; 
  // shorthand above $ person.isAdult = function() {return this.age >= 18;}

  display(person);
  display(person.age); 
  display(person.isAdult());
  display(person1);
  registerUser(person); // register user function and pass person in as a argument

})();





/* Video 4 Dynamic Nature of JavaScript
Javascript is a dynamically typed language 
You don't need the ceremony of creating types ahead of time. 
*/ 
