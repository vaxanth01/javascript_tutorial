function sumOfDigits(num) {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  
  // Example usage:
  console.log(sumOfDigits(1234)); // 10
  