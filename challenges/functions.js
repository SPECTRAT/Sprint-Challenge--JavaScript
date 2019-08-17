// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(para1, para2, callback) {
  console.log(callback(para1, para2));
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2) {
 return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
 }

function greeting(firstName, lastName) {
 return `Hello, ${firstName} ${lastName}, nice to meet you! `;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// nestedFuncton() can access the "internal" variable because it's within the function scope of myFunction. If you were to try and console log "internal" outside of the function, it would return as undefined because it has to be within the curly brackets of that function to be able to access the varaible. Functions can reach outward for variables, but the surrounding code cannot reach into a function for a variable. It has to be initialzed from within the function itself.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();