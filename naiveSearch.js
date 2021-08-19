function naiveSearch(str, pattern) {
  var matches = 0;
  // loop through the string
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) break;
      else if (j = pattern.length - 1) matches++;

    }
    
  }
 return matches
}

console.log(naiveSearch('gabcsgabc', 'abc'))
