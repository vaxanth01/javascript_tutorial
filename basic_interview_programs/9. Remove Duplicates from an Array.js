function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Example usage:
  console.log(removeDuplicates([1, 2, 3, 4, 5, 2, 3])); // [1, 2, 3, 4, 5]
  