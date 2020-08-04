// 2. Write a function that will find and return the biggest digit of a number.

const number=n=>{
   return newn=n.toString().split("").sort().reverse()[0]
}
console.log(number(107253))

// 3. Write a JavaScript program to convert a given string into an array of words.

const stringtoarray=str =>{
    return array=str.split(" ")
};
console.log(stringtoarray("I love my new pets"))

// 4. Write a JS function to check whether the word is palindrome.

const PalindromeCheck=word=>{

if (word.toLowerCase().split("").reverse().join("")===word.toLowerCase())
return 'True';
return 'False';
};
console.log(PalindromeCheck('Madam'))