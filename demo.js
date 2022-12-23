'use strict'; 
(function() {

  let person = {
    firstName: 'Craig',
    lastName: 'Cooper',
    age: 18,
    isAdult() {return this.age <= 18;}
  };
 
  let healthStats = {
    height: 68,
    weight: 150
  };

  function mergeHealthStats(person,healthStats){
    return Object.assign(person,healthStats);
  }

  let mergedPerson = mergeHealthStats(person1,healthStats); 

  display(mergedPerson); 

})();

