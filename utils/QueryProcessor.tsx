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
  return "";
}
