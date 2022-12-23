'use strict'; 
(function() {

  function registerUser(firstName,lastName){
  let person = {
    firstName,
    lastName 
  };
  display(person);
  }

  registerUser('Craig','Cooper');
  registerUser('Jeff','Cooper'); 
})();





/* Video 4 Dynamic Nature of JavaScript
Javascript is a dynamically typed language 
You don't need the ceremony of creating types ahead of time. 

'use strict'; 
(function() {

  function registerUser(fName,lName){
  let person = {
    firstName: fName,
    lastName: lName,    
  };
  display(person);
  }

  registerUser('Craig','Cooper');
  registerUser('Jeff','Cooper'); 
})();



*/ 
