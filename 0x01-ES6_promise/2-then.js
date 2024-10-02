export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => { // Removed 'response' since it's not used
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => { // Removed 'error' since it's not used
      console.log('Got a response from the API');
      return new Error();
    });
}
