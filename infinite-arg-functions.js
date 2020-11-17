function sumUp(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

const total = sumUp(10, 19, -3, 22, 5, 100);

// const total = sumUp([10, 19, -3, 22, 5, 100]);


