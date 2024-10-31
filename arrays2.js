/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  // Your code here
  let res;
  if (numbers.length % 2 !== 0) {
    // console.log(`The ${numbers} is: Odd`);
    res = true;
  } else {
    // console.log(`The ${numbers} is: Even`);
    res = false;
  }
  console.log(`${res}`);
}
isArrayLengthOdd([1, 2, 3]);
isArrayLengthOdd([1, 2, 3, 4]);

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  // Your code here
  let res;
  if (numbers.length % 2 === 0) {
    // console.log(`The ${numbers} is: Even`);
    res = true;
  } else {
    // console.log(`The ${numbers} is: Odd`);
    res = false;
  }
  console.log(`${res}`);
}
isArrayLengthEven([1, 2, 3]);
isArrayLengthEven([1, 2, 3, 4]);

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  // Your code here
  instructors.push("Laila");
  console.log(`${instructors}`);
}
let bob = ["Mshary", "Hasan"];
addLailaToArray(bob);

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  // Your code here
  let lastTeam = teams.pop();
  console.log(lastTeam);
}
let allTeams = ["Brazil", "Germany", "Italy"];
console.log(allTeams);
eliminateTeam(allTeams);
console.log(allTeams);

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
  if (fruits.length % 2 === 0) {
    let halfFruits = fruits.slice(2, fruits.length);
    console.log(halfFruits);
  } else if (fruits.length % 2 !== 0) {
    console.log([]);
  }
}
secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]);
secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]);


/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
    // Your code here
    let oneExclamationMark = shout.slice(0, shout.indexOf("!") + 1);
    console.log(oneExclamationMark);
    if (shout[shout.length - 1] !== "!") {
        console.log(shout);
    }
  }
  youGottaCalmDown("HI!!!!!!!!!!");
  youGottaCalmDown("Taylor Schwift!!!!!!!!!!!");
  youGottaCalmDown("Hellooooo");