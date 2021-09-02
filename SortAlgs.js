

// Bubble Sort!
// sorts an array
// swaps values based on whether or not the value ahead if it is smaller 
// time complexity: if array is nearly sorted, it's linear time, otherwise it is O(n^2)

// helper, to swap the values in the array
const swap = (arr, idx1, idx2) => {
	[arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}


function bubbleSort(arr) {
	let noSwap;
	for (let i = arr.length ; i > 0; i--) {
		noSwap = true;
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j+1]) {
				swap(arr, j, j+1);
				noSwap = false;
			}
		}
		if (noSwap) break;
	}
	return arr
}
console.log('bubbleSort--------------------------')
console.log(bubbleSort([1,3,2]))
console.log(bubbleSort([1,6,5,3]))
console.log(bubbleSort([1,2,3,4]))
console.log(bubbleSort([5,4,3,2,1]))


// Selection Sort
// walk through to find smallest element, swap it to the front, move to the next 
// sorts an array
// time complexity: O(n^2)

function selectionSort(arr) {
	let minimum;
	for (let i = 0;i < arr.length; i++) {
		minimum = i;
		for (let j = i+1; j < arr.length; j++) {
			if (arr[minimum] > arr[j]){
				minimum = j; 
			}
		}
		// don't need to swap if minimum never changed 
		if (i !== minimum) {
			swap(arr, i, minimum)
		}
	}
	return arr;
}

console.log('selectionSort-----------------------')
console.log(selectionSort([1,3,2]))
console.log(selectionSort([1,6,5,3]))
console.log(selectionSort([1,2,3,4]))
console.log(selectionSort([5,4,3,2,1]))

// Insertion Sort






