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



