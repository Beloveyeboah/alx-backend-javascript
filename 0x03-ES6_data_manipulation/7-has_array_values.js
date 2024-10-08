export default function hasValuesFromArray(set, array) {
  // Iterate through each element in the array
  for (const element of array) {
    // Check if the element is not in the set
    if (!set.has(element)) {
      return false; // Return false if any element is not found in the set
    }
  }
  return true; // Return true if all elements are found in the set
}
