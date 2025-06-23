# 🔤 Anagram Checker – JavaScript Algorithm Exercise
## 📌 Why I Built This
As part of my continued journey learning computer science fundamentals and preparing for technical interviews, I created this small but powerful algorithm to practice working with strings, hash maps, and time complexity. I rebuilt this problem from scratch to internalize the underlying logic and reinforce my ability to solve frequency comparison problems efficiently.

## 📖 Problem Statement
Given two strings, write a function to determine if the second string is an anagram of the first.

An anagram is a word, phrase, or name formed by rearranging the letters of another.
Example: "cinema" is an anagram of "iceman".

## 🧠 Approach & Time Complexity
This solution uses frequency counter patterns to achieve an efficient O(n) time complexity. It avoids nested loops and instead uses objects to store and compare character counts.

### ✅ Efficient Version (with 1 frequency object)
Create a frequency object from the first string

Decrement values while iterating through the second string

Return false early if a character is missing or count goes negative

Time Complexity: O(n)

Space Complexity: O(1) (assuming character set is fixed, e.g. a–z)

### 🆚 More Verbose Version (with 2 frequency objects)
Build two separate character maps

Compare keys and values between both maps

Same time complexity, more explicit but slightly more verbose

## 🛠️ How to Use
Clone this repository or copy the code into your JavaScript environment.

### Run Example

console.log(validAnagram('hello', 'olleh')) // true

console.log(validAnagram('anagram', 'nagaram')) // true

console.log(validAnagram('aaz', 'zza')) // false

console.log(validAnagram('qwerty', 'qeywrt')) // true

### 🔍 Test Cases Included

validAnagram('hello', 'olleh')          // true

validAnagram('', '')                    // true

validAnagram('aaz', 'zza')              // false

validAnagram('anagram', 'nagaram')      // true

validAnagram('rat', 'car')              // false

validAnagram('awesome', 'awesom')       // false

validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false

validAnagram('qwerty', 'qeywrt')        // true

validAnagram('texttwisttime', 'timetwisttext') // true

## 🧠 What I Learned
How to use frequency counters to optimize string comparison problems

Importance of early returns and efficient looping

Why nested loops should be avoided in favor of hashing when comparing character data

Solidified understanding of time complexity analysis
