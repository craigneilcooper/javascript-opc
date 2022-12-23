'use strict'; 
(function() {

  let person = {
    firstName: 'Craig',
    lastName: 'Cooper',
    age: 18,
    isAdult() {return this.age <= 18;}
  };

  display(person.isAdult());

})();

