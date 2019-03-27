// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT
function add() {
  var newName = prompt("Which Name would you like to add?: ")
  roster.push(newName)
}
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function remove() {
  var remStd = prompt("Which Name Would You Like To Remove?: ")
  var index = roster.indexOf(remStd);
  roster.splice(index,1)
}
// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER
function display() {
  console.log(roster);

}

// Create a function called display that prints out the orster to the console.


// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
var start = prompt("Would you like to start the roster Web App? y/n");
var request = "empty";

if (start === 'y') {
  while (request !== "quit") {
    request = prompt("Please select an action: Add, Remove, Display or Quit.")
    if (request === 'add') {
      add();
    }else if (request === 'remove') {
      remove();
    }else if (request === 'display') {
      display();
    }else {
      alert("Not Recognized")
    }
  }
}
alert("Thanks for using the web app! please refresh to start over!")


































// function AddNum(num1, num2){
//   console.log(num1+num2);
// }
//
// function SubtractNum(num3, num4, num5){
//   console.log(num3-num4-num5);
// }
//
// function HelloSomeone(name="Ajibola"){
//   console.log("Hello "+name);
// }
//
// function formal(name="JB", title='Sir'){
//   return title+ " "+name
// }
//
// function timesfive(numInput){
//   var results = numInput * 5
//   return results
// }
//
// // GLOBAL VARIABLE
// var v = "GLOBAL V"
// var stuff = "GLOBAL STUFF"
//
// function fun(stuff){
//   console.log(v);
//   stuff = "Reassign Stuff Inside Functions"
//   console.log(stuff);
// }
//
// fun()
// console.log(stuff);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // // // var input = prompt('Enter your input in pounds')
// // // // var result = 0.454*input;
// // // // alert("the weight is now in: "+result+"kilograms");
// // // // console.log("conversion completed");
// // //
// // // // var num = 1;
// // // //
// // // // while (num <=10) {
// // // //   if(num%2 == 0) {
// // // //     console.log("i am divisible by 2");
// // // //     console.log(num);
// // // //   }
// // // //   num = num+1;
// // // // }
// // //
// // // // For Loops
// // // // for (var i = 0; i < 5; i++) {
// // // // console.log("I am less than five "+i);
// // // // }
// // //
// // // var word = "ABABABABABABAB"
// // //
// // // for (var i = 0; i < word.length; i=i+2) {
// // //   console.log(word[i]);
// // // }
// //
// // var x = 0;
// //
// // while (x<5) {
// //   console.log("hello");
// //   x++
// // }
// //
// // for (var i = 0; i < 5; i++) {
// //   console.log("hello");
// //   i++
// // }
// //
// // // While Loops
// //
// // var num = 1;
// //
// // while (num<25) {
// //   if (num%2 !==0) {
// //     console.log(num);
// //   }
// //   num++
// //
// // }
// // method 2
//
// // var num =
// // }
// //    // if (x%2) {
// // // // }else {
// // // //   console.log("Is not divisible by 2")
// // // // }
