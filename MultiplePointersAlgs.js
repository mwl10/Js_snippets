// Count Unique Values
	// accepts a SORTED array of digits, and returns the count of unique values in the array 
	// time complexity O(n), space complexity O(1)

function countUniqueValues(arr){
  // two pointers: i,j 
  let i = 0;
  let j = 1;
  if (arr.length === 0) return 0;
  while (j < arr.length) { 
    if (arr[i] === arr[j]) j++;
    else {
        i++;
        arr[i] = arr[j];
        j++; 
    }}
  return i+1;
}

console.assert(countUniqueValues([1,1,1,1,2]) === 2);
console.assert(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) === 7);
console.assert(countUniqueValues([]) === 0)


// Average Pair
	// given a sorted array & target average, find out if there is a pair of values 
	// in the array whereby the average of the pair equals the target average 
	// time complexity O(n), space O(1)

function averagePair(arr, targetAvg){
  let left = 0;
  let right = arr.length - 1;
  let avg;
  while (left < right) {
      avg = (arr[left] + arr[right]) / 2;
      if (avg < targetAvg) left++;
      else if (avg > targetAvg) right--;
      else return true; 
  }
  return false;
}

console.assert(averagePair([1,2,3], 2.5) === true);
console.assert(averagePair([1,3,3,5,6,7,10,12,19], 8) === true);
console.assert(averagePair([-1,0,3,4,5,6], 4.1) === false);
console.assert(averagePair([], 2.5) === false);

// Is Subsequence 
	// takes in two strings, checks whether chars in the first string form a subsequence of the characters
	// in the second string, without their order changing 
	// time O(n), space O(1)


function isSubsequence(sub, str) {
    // want to check whether first letter of sub matches the letter of str 
    let p1= 0;
    let p2= 0;
    // null check 
    if (!sub) return true;
    while (p2 < str.length) {
        // if equal, jump one ahead for the substring index
        // otherwise we don't want to go ahead with the substring, we just want to with the string index
        if (sub[p1] === str[p2]) p1++;
        // if the substring index makes it to its entirety, return true
        if (p1 === sub.length) return true;
        
        p2++;
        
        }
    return false;
        
    }
 
console.assert(isSubsequence('hello', 'hello world') === true)
console.assert(isSubsequence('sing', 'sting') === true)
console.assert(isSubsequence('abc', 'abracadabra') === true)
console.assert(isSubsequence('abc', 'acb') === false )


















