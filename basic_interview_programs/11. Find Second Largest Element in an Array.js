function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second && num < first) {
        second = num;
      }
    }
    return second;
  }
  
  // Example usage:
  console.log(secondLargest([1, 2, 3, 4, 5])); // 4
  