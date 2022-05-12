// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
//describe the test
describe("capitalizedNames", () => {
  //describe what the test does
  it("Takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    //variable given (object array)
    const people = [
      //Objects are in key:value pairs, with name and occupation as keys and the added information as values, respectively. 
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
  //expected output 
  expect(capitalizedNames(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
})
})

// //Fail received:
//    ✕ Takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
//ReferenceError: capitalizedNames is not defined

// b) Create the function that makes the test pass.
//Function name: capitalizedNames
//Input: array of objects
//Output: sentence including person's name and occupation, with their name capitalized
//Pass array to make the function dynamic
const capitalizedNames = (array) => {
 //use destructuring to return a sentence with information about each person
  return `${people.name} is ${people.occupation}`
}
//Use console.log to display output of function. The objective is to have a sentence for each person in array format. I passed people here as the variable. 
console.log(capitalizedNames(people))

//I'm receiving a "people is not defined" error. I am referencing the JavaScript Objects material in our syllabus, which has an example a little similar to this one. Could it be that I have to call upon each name individually? 

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remaindersOnly", () => {
  //describe what the test does
  it("Takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3."
  , () => {
    //variable given
     const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    //Expected output: [ 2, 0, -1, 0 ]
     const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    //Expected output: [ 2, 1, -1 ]

  //expected outputs
  expect(remaindersOnly(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(remaindersOnly(hodgepodge2)).toEqual([ 2, 1, -1 ])
})
})
// //Fail received:
// //✕ Takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)
// // ReferenceError: remaindersOnly is not defined


// // b) Create the function that makes the test pass.
// //Function name: remaindersOnly
// //Input: mixed data array
// //Output: remainders of the numbers when divided by 3
// //Use .filter method to filter the numbers from the array
// //Use modulo to find remainder of the numbers when divided by 3
const remaindersOnly = arr.filter; (Number) => {
   return Number % 3

}
console.log(remaindersOnly(hodgepodge1))
console.log(remaindersOnly(hodgepodge2))
//I think I'm close to getting the correct function to make the test pass. I am receiving an error that states "arr is not defined". 

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumsCubed", () => {
  //describe what the test does
  it("Takes in an array of numbers and returns the sum of all the numbers cubed."
  , () => {
    //variable given
     const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
     const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125

  //expected outputs
  expect(sumsCubed(cubeAndSum1)).toEqual(99)
  expect(sumsCubed(cubeAndSum2)).toEqual(1125)
})
})
//Fail received:
// ✕ Takes in an array of numbers and returns the sum of all the numbers cubed.
// ReferenceError: sumsCubed is not defined

// b) Create the function that makes the test pass.
//Function name: sumsCubed
//Input: array of numbers
//Output: sum of all the numbers cubed
 function sumsCubed(numbers) {
   return numbers.map(x => x ** 3)
 }
 console.log(sumsCubed(cubeAndSum1))

//I'm first trying to make a function that cubes all the numbers, then I will figure out how to add the numbers and return the sum. The parameter is numbers, the .map method is there to return an array with the same amount of numbers, and the x ** 3 is indicative of a number to the third (cubed) power. Every time I run this I receive an error that states "cubeAndSum1 is not defined".

//This week's assessment showed me that I really need to take the time to review JavaScript. I was unfortunately unable to create working functions in this section, but I feel like I got close to the right answers. 