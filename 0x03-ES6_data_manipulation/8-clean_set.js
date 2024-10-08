export default function cleanSet(set, startString) {
  // Initialize an array to hold the resulting strings
  const result = [];

  // Iterate through each value in the set
  for (const value of set) {
    // Check if the value starts with the specified startString
    if (value.startsWith(startString)) {
      // Append the rest of the string (excluding the startString) to the result array
      result.push(value.slice(startString.length));
    }
  }

  // Join the array elements into a single string separated by '-'
  return result.join('-');
}
