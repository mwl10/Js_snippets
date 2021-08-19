
// Valid Anagram? 
// given two strings, determine whether or not the second string is an anagram of the first
// assume lowercase 
// Time Complexity O(n), so no nested loops!

function validAnagram(str1, str2){
  // check length is the same, if so FALSE
  if (str1.length !== str2.length) {
      return false;
  }
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
      if (!(key in obj2)) {
          return false;
      }
      // make sure each key value for obj1 is the same for obj2 
      if (obj1[key] !== obj2[key]) {
          return false;
      }
  }
  return true;
}

console.assert(validAnagram('','') === true)
console.assert(validAnagram('aaz','zza') === false)
console.assert(validAnagram('anagram','nagaram') === true)
console.assert(validAnagram('rat','car') === false)
console.assert(validAnagram('awesome','awesome') === true)
console.assert(validAnagram('amanaplanacanalpanama','acanalmanplanpamana') === false)
console.assert(validAnagram('texttwisttime','timetwisttext') === true)





