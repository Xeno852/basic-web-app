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
  else if (query.includes("plus")) {
    return(
      // Should come as a query like "What is X plus Y?"" parse in the numbers that are in the X and Y places and add them and return
      (parseInt(query.split("plus")[0]) + parseInt(query.split("plus")[1])).toString()
    )
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
