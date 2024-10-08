export default function updateUniqueItems(map) {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through each entry in the map
  for (const [key, value] of map) {
    // Check if the quantity is 1
    if (value === 1) {
      // Update the quantity to 100
      map.set(key, 100);
    }
  }

  return map;
}
