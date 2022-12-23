# Creating JS Objects

## 3-Object Literals

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
      registerUser(person); // register user function and pass person in as a   argument

    })();

## 8-Inspecting Object Properties

    'use strict';
    (function() {

      let person = {
        firstName: 'Craig',
        lastName: 'Cooper',
        age: 18,
        isAdult() {return this.age <= 18;}
      };
        for (let propertyName in person) {
        display(propertyName);
      }

      display('-----------------------------------');
      display(person)
      display(person.isAdult());
      display(Object.keys(person));

    })();

## 9 - Object Equality & Object.is() Function

- Key in the Equality operator is comparing a object vs primitive value types
- Objects will be compared to the value in memory
- Variable declarations or primitive value types the value will be compared in the equality operator.

## 10 - Object Assign & Immutability

Example 1

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

      Object.assign(person,healthStats);

      display(person);

    })();

---

Example 2 - With a function merge

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