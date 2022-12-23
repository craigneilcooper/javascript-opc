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
![9-2](https://user-images.githubusercontent.com/102772112/209391465-d619066b-dd79-48dc-94ab-92db52704367.png)
![9-2-1](https://user-images.githubusercontent.com/102772112/209391475-ea75e30b-8cc2-4f1c-bcb1-123bfca163b5.png)

## 10 - Object Assign & Immutability
![10-Object-Assign-immu](https://user-images.githubusercontent.com/102772112/209391482-4f46f0f5-14f7-4d85-905d-fe2f20dafe17.png)

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
    
    ## Ext![FunctionVSObject_portoype](https://user-images.githubusercontent.com/102772112/209391662-a820d62b-4795-488a-965c-c53da701bfe6.png)
ras
    ![objectLiteral-shorthand](https://user-images.githubusercontent.com/102772112/209391622-e1969692-0c36-4482-8bb5-8a8c83593525.png)
![ObjectLiteralMethodDeclaration](https://user-images.githubusercontent.com/102772112/209391613-8351c190-16b5-43d2-a2eb-a84aee24e1a7.png)
![addingFunctionsToObjects](https://user-images.githubusercontent.com/102772112/209391623-2ed947a1-4837-43ca-bc37-8ee81a6a8330.png)

    
