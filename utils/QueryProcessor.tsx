export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.includes("name?")) {
    return (
      "Luke Blackwell"
    );
  }
  // make a condition to find the sum of the numbers if this query is found "what is 5 plus 18"
  else if (query.includes("plus")) {
    let numbers = query.split("plus")[1].split(" ");
    return (parseInt(numbers[1]) + parseInt(numbers[2])).toString();
  }
  // make a condition to find the difference of the numbers if this query is found What is 33 multiplied by 8?""
  else if (query.includes("multiplied")) {
    let numbers = query.split("multiplied by")[1].split(" ");
    return (parseInt(numbers[1]) * parseInt(numbers[2])).toString();
  }

  // make a condition to find the largest number if this query is found "	Which of the following numbers is the largest: 13, 63, 61?"
  else if (query.includes("largest")) {
    let numbers = query.split(":")[1].split(",");
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (parseInt(numbers[i]) > largest) {
        largest = parseInt(numbers[i]);
      }
    }
    return largest.toString();
  }
  // make a condition to respond to this "Which of the following numbers are primes: 65, 83, 31, 48, 13?" with just the correct number:
  else if (query.includes("primes")) {
    let numbers = query.split(":")[1].split(",");
    for (let i = 0; i < numbers.length; i++) {
      let isPrime = true;
      for (let j = 2; j < parseInt(numbers[i]); j++) {
        if (parseInt(numbers[i]) % j === 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        return numbers[i];
      }
    }
  }
  // make a condition to solve this and return it What is 4 to the power of 85?
  else if (query.includes("power of")) {
    let numbers = query.split("to the power of")[1].split(" ");
    return Math.pow(parseInt(numbers[1]), parseInt(numbers[2])).toString();
  }
  // make a condition to 	solve this and return it: Which of the following numbers is both a square and a cube: 784, 2502, 27, 1, 484, 4931, 2900?
  else if (query.includes("square") && query.includes("cube")) {
    let numbers = query.split(":")[1].split(",");
    for (let i = 0; i < numbers.length; i++) {
      if (Math.sqrt(parseInt(numbers[i])) % 1 === 0 && Math.cbrt(parseInt(numbers[i])) % 1 === 0) {
        return numbers[i];
      }
    }
  }
  return "";
}
