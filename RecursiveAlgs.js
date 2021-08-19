// Reverse
	// accepts a string a returns it's reverse


function reverse(str){
    if (str.length === 0) return ""
    return reverse(str.slice(1))  + str[0]
}

console.assert(reverse('awesome') === 'emosewa') // 
console.assert(reverse('rithmschool') === 'loohcsmhtir')
console.assert(reverse('') === '') // 'loohcsmhtir'

// Is Palindrome 
	// returns true if string that is passed is a palindrome



function isPalindrome(str){
    let len = str.length;
    
    if (len === 1) return true;
    
    if (len == 2) return str[0] === str[1];

    if (str[0] === str[len-1]) { 
        return isPalindrome(str.slice(1, len-1))}
    else return false;
    
}
console.assert(isPalindrome('awesome')===false)
console.assert(isPalindrome('aa') ===true)
console.assert(isPalindrome('tacocat') === true)
console.assert(isPalindrome('amanaplanacanalpanama') === true)
console.assert(isPalindrome('amanaplanacanalpandemonium') === false)

// Some Recursive 
	// takes an array and a callback, returns true if a single array value returns true when passed to the callback
	// otherwise false

function someRecursive(arr, callback) {
    if (arr.length === 1) return callback(arr[0])
    return callback(arr[0]) || someRecursive(arr.slice(1), callback)
}


const isOdd = val => val % 2 !== 0;

console.assert(someRecursive([1,2,3,4], isOdd) === true)
console.assert(someRecursive([4,6,8,9], isOdd) === true)
console.assert(someRecursive([4,6,8], isOdd) === false)
console.assert(someRecursive([4,6,8], val => val > 10) === false);

// Flatten 
	// accepts an array, or array of arrays and returns new array w/ flattened values


function flatten(arr){
    if (arr.length === 0) return []
    if (typeof arr[0] === 'number') {
        return [arr[0]].concat(flatten(arr.slice(1)))
    }
    else {
        return flatten(arr[0]).concat(flatten(arr.slice(1)))
    }}
console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

















