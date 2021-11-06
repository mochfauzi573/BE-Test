/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  let total = Math.floor((n + 1) * (n + 2) / 2);
  for (let i = 0; i < n; i++)
      total -= a[i];
  return total;
}

console.log(result(numbers));
