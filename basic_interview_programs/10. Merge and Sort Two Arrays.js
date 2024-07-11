function mergeAndSort(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
  }
  
  // Example usage:
  console.log(mergeAndSort([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
  