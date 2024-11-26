const randomNumbers = [7, -11, 5, 18, 3, 9, 14, 1, 6, -22];

const orderNumbers = (array) => {
  let evenNumbers = [];
  let oddNumbers = [];

  // Tu codigo acá
  array.forEach((num) => {
    if (num % 2 === 0) {
      evenNumbers.push(num)
    } else {
      oddNumbers.push(num)
    }
  });

  return [evenNumbers, oddNumbers]
}

const [even, odd] = orderNumbers(randomNumbers)
console.log(orderNumbers(randomNumbers));
console.log(even);
console.log(odd);
