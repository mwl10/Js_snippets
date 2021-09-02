// Binary Search 
	// accepts a sorted array, and a val
	// returns the index at which the value exists, otherwise -1

function binarySearch(arr, val){
  // loop while the left pointer is less than the right pointer'
  // the left and the right pointer start at each end
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
      // midpointer is an index
      let midpointer = Math.round((left + right) / 2);
      // is this less or greater than the value
      if (arr[midpointer] > val) right = midpointer;
      else if (arr[midpointer] < val) left = midpointer;
      else return midpointer;  
  }
  return -1;
}

console.assert(binarySearch([1,2,3,4,5],2) === 1)
console.assert(binarySearch([1,2,3,4,5],3) === 2)
console.assert(binarySearch([1,2,3,4,5],6) === -1)
console.assert(binarySearch([],2) === -1)






































