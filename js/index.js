// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.

const hacker1 = 'Ernie';
console.log(`The driver\'s name is ${hacker1}.`);

// 1.3 Create a variable `hacker2` with the navigator's name.
//1.4 Print `"The navigator's name is YYYY"`.

const hacker2 = 'Bert';
console.log(`The navigator\'s name is ${hacker2}.`);

// Iteration 2: Conditionals
/* 2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters!`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters!`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!.`
  );
}

// Iteration 3: Loops
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

let newName = '';

for (let i = 0; i < hacker1.length; i++) {
  newName = newName + hacker1[i] + ' ';
}
console.log(newName.toUpperCase());

/*
3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/

let reverseName = '';

for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseName = reverseName + hacker1[i];
}
console.log(reverseName);

/* 3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

let comparison = hacker1.localeCompare(hacker2);
if (comparison > 0) {
  console.log('Yo, the navigator goes first definitely.');
} else if ((comparison = 0)) {
  console.log('What?! You both have the same name?');
} else "The driver's name goes first.";

/* Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.

 */

const paragraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec risus vel nulla finibus scelerisque. Donec vehicula pretium orci. Quisque sollicitudin, nisl ut condimentum ornare, mi quam varius sem, a dapibus lacus odio eu mi. Suspendisse ut feugiat nisl, sed gravida arcu. Praesent vestibulum lorem at porttitor posuere. Ut eu justo id mauris tristique vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel malesuada justo, eget pharetra enim. In vel tristique nulla, sed venenatis justo. Curabitur hendrerit mi at tellus efficitur, in mollis mi ornare. Nam iaculis ex a velit semper, et tempus tellus congue. \n \n Pellentesque mi tortor, viverra in sollicitudin vel, consequat eget ex. Mauris enim est, elementum molestie tempor nec, efficitur nec neque. Curabitur pharetra magna non enim egestas fringilla. Donec quis ligula ac dui efficitur iaculis. Nam eget metus ligula. Etiam interdum tempor blandit. Cras non ante fermentum, malesuada velit a, pharetra tortor. Phasellus vulputate sapien nec ultricies imperdiet. Donec sit amet nisi tincidunt, pellentesque nisi nec, tincidunt ligula. \n \n Aenean scelerisque placerat lorem eu porttitor. Nulla ultricies arcu ut augue mattis vulputate. Maecenas lorem mi, venenatis non rhoncus in, rutrum sed libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat velit nec diam dictum consequat. Duis nec arcu vitae nisl placerat lobortis eu non lectus. Fusce gravida urna cursus nibh ornare, in gravida neque vulputate. Ut laoreet nunc pretium purus placerat, sit amet pulvinar ipsum convallis. Aenean sagittis blandit porta. Phasellus tincidunt sem magna, pulvinar fringilla orci molestie et. Aenean lacinia consectetur risus sit amet viverra.';

/* Make your program count the number of words in the string.*/

const wordCount = paragraph.split(' ');
console.log(wordCount.length);

/*Make your program count the number of times the Latin word et appears.*/

let wordEt = 0;
for (let i = 0; i < wordCount.length; i++) {
  let test = wordCount[i].includes('et');
  let test2 = wordCount[i].includes('Et');
  wordEt = wordEt + test + test2;
}
console.log(wordEt);

/*
Short Cut: 
const wordEt= /et/gi;
let matchesArray = paragraph.match(wordEt);
console.log(matchesArray.length);*/

/* Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"...

Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 😃 */

function palindrome(str) {
  /*converting the string to lowercase letters without 
 spaces or any kinds of interpunctuation*/
  str = str.replace(/\W/g, '').toLowerCase();

  /*counter for the first half of the string*/
  for (let i = 0; i < str.length / 2; i++) {
    /*first index of the string gets compared with the last index of the string, then second with second last and so on*/
    if (str[i] !== str[str.length - 1 - i]) {
      return 'This is not a palindrome!';
    }
  }
  return 'this is a palindrome!';
}
palindrome('ahija');

/*learning: I've had the second <return (true)> placed one bracket too early which resulted in the function only being executed once - for the first/last letter. But the way the function works, is that it is true by default, unless the condition proves otherwise and is then ended */

/* WHY IS THIS FUNCTION NOT WORKING?

function palindrome(str) {
  for (let i = 0; i < str.length/2; i++) {
   if (str[i] === str[str.length - 1 - i]) {
       return "This is a palindrome!";
      }    
  } 
  return "this is not a palindrome!";
}
palindrome ("ab"); // --> This is not a palindrome
palindrome ("ahb"); // --> This is a palindrome.


_______________________________________________________
QUESTION: When I uncomment the following function (palindromeChecker), it leads to my function "palindrome" not being executed anymore. Why is this?
_______________________________________________________

function palindromeChecker(str) {
str = (str.replace(/\W/g, '')).toLowerCase();
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
palindromeChecker ("A man, a plan, a canal. Panama");
*/
