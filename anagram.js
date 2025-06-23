/* 
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as 'cinema'
formed from iceman
*/

/* **************  HERE IS A GOOD APPROACH TO SOLVING THIS PROBLEM WITH A TIME COMPLEXITY OF O(n) *******
This approach is more efficient, scalable and common in technical interviews for problems involving comparisons or frequencies or content. It performs excellent with large data. */

function validAnagram(str1, str2) {
    // Edge case to check the strings lengths
    if (str1.length !== str2.length) return false;
    

    // Create two empty objects to store the frequency counts of the chars in both str1/str2
    let charCount1 = {};
    let charCount2 = {};

    // Loop over str1 to check the characters it has inside
    for (let char of str1.toLowerCase()) {
        // Create key inside obj1 and set or increment it's value by 1
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Loop over str2 to check the characters it has inside
    for (let char of str2.toLowerCase()) {
        // Create key inside obj2 and set or increment it's value by 1
        charCount2[char] = (charCount2[char] || 0) + 1;
    }
    // console.log("Object 1:", charCount1);
    // console.log("Object 2:", charCount2);

    // Loop over charCount1 to check if the keys in it are in charCount2 as well.
    for (let key in charCount1) {
        if (!(key in charCount2)) {
            return false;
        } 
        // Make sure the keys have the same frequency counts
        if (charCount1[key] !== charCount2[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('hello', 'olleh')) // true
console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true

/* **************  HERE IS ANOTHER APPROACH TO SOLVING THIS PROBLEM WITH LESS SYNTAX AND A TIME COMPLEXITY OF O(n) *******/
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let charCount = {};

    for (let char of str1.toLowerCase()) {
        charCount[char] = (charCount[char] || 0 ) + 1
    }

    for (let char of str2.toLowerCase()) {
        if (!charCount[char]) {
            return false;
        }
        // This removes (decrements) the character, once found. Eventually every character's value
        // will be decremented to 0, and that'll show that all characters exist in both objects
        // and that's what we want
        charCount[char]--;
    }
    return true;
}

console.log(validAnagram('hello', 'olleh')) // true
console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true