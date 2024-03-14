export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return "William Shakespeare (26 April 1564 - 23 April 1616) was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist.";
  } else if (query.includes("name?")) {
    return "Luke Blackwell";
  } else if (query.includes("plus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    const sum = numbers ? numbers.reduce((acc, curr) => acc + curr, 0) : 0;
    return sum.toString();
  } else if (query.includes("minus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    const difference = numbers ? numbers.reduce((acc, curr) => acc - curr) : 0; // Assuming first number - second number for subtraction
    return difference.toString();
  } else if (query.includes("multiplied by")) {
    let numbers = query.split("multiplied by").map(part => parseInt(part.match(/\d+/)?.[0] || "0"));
    return (numbers[0] * numbers[1]).toString();
  } else if (query.includes("largest")) {
    let numbers = query.split(":")[1].split(",").map(Number);
    let largest = Math.max(...numbers);
    return largest.toString();
  } else if (query.includes("primes")) {
    let numbers = query.split(":")[1].split(",").map(Number);
    return numbers.filter(isPrime).toString(); // Assuming you have an isPrime function defined elsewhere
  } else if (query.includes("power of")) {
    let numbers = query.match(/\d+/g)?.map(Number);
    return numbers ? Math.pow(numbers[0], numbers[1]).toString() : "";
  } else if (query.includes("square") && query.includes("cube")) {
    let numbers = query.split(":")[1].split(",").map(Number);
    return numbers.find(number => Math.sqrt(number) % 1 === 0 && Math.cbrt(number) % 1 === 0).toString();
  }
  return "";
}

function isPrime(num: number): boolean {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}
