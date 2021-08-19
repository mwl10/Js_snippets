
// Valid Anagram 
	// given two strings, determine whether or not the second string is an anagram of the first
	// assume lowercase 
	// Time Complexity O(n), so no nested loops!

function validAnagram(str1, str2){
  // check length is the same, if so FALSE
  if (str1.length !== str2.length) return false;
  let obj1 = {}
  let obj2 = {}
  // make object 1 for str1: 1 for loop
  for (let char of str1) {
      obj1[char] = (obj1[char] || 0) + 1;
  }
  // make object 2 for str1: 1 for loop
  for (let char of str2) {
      obj2[char] = (obj2[char] || 0) + 1;
  }
  // compare objects!: 1 for loop 
  for (let key in obj1) {
      // make sure each key for obj1 is in obj2
      if (!(key in obj2)) return false;
      // make sure each key value for obj1 is the same for obj2 
      if (obj1[key] !== obj2[key]) return false;
  }
  return true}

console.assert(validAnagram('','') === true)
console.assert(validAnagram('aaz','zza') === false)
console.assert(validAnagram('anagram','nagaram') === true)
console.assert(validAnagram('rat','car') === false)
console.assert(validAnagram('awesome','awesome') === true)
console.assert(validAnagram('amanaplanacanalpanama','acanalmanplanpamana') === false)
console.assert(validAnagram('texttwisttime','timetwisttext') === true)


// Same Frequency
	// given two positive integers, find out if the two numbers have the same frequency of digits 
	// time O(n)

function sameFrequency(num1, num2){
	// could do this with num % 10 instead to lap of digits
    const str1 = num1.toString();
    const str2 = num2.toString();
    const obj1 = {};
    for (let i of str1) {
        obj1[i] = (obj1[i] || 0) + 1;
    }
    // now we have an object for the first number 
    for (let j of str2) { 
        if (obj1[j] && obj1[j] > 0) obj1[j]--;
        else return false;
    }
    return true;
}

console.assert(sameFrequency(182, 281) === true)
console.assert(sameFrequency(34, 14) === false)
console.assert(sameFrequency(3589578, 5879385) === true)
console.assert(sameFrequency(22, 222) === false)


// Are There Duplicates
	// accepts a variable number of arguments, and checks for duplicates
	// time O(n), space O(n)

function areThereDuplicates() {
    const obj1 = {};
    for (let i = 0; i<arguments.length; i++) {
        let arg = arguments[i]
        obj1[arg] = (obj1[arg] || 0) + 1;
        if (obj1[arg] > 1) return true;
  }
  return false;
}

console.assert(areThereDuplicates(1,2,3) === false);
console.assert(areThereDuplicates(1,2,2) === true);
console.assert(areThereDuplicates() === false);
console.assert(areThereDuplicates('a','b','c','a') === true);

