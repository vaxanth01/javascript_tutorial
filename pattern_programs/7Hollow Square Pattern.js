let n = 5; // Number of rows and columns

for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n || j === 1 || j === n) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}
