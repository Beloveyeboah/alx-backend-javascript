// Export a const instance of WeakMap and name it weakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, set the initial count to 0
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Log the current count
  console.log(`Calling ${endpoint.protocol}://${endpoint.name}`);
  console.log(count);

  // If the count is 5 or more, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Your API logic here
}

