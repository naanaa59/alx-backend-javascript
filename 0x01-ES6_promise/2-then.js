export default function handleResponseFromAPI(promise) {
  const obj = {
    status: 200,
    body: 'success',
  };
  return promise.then(
    () => {
      console.log('Got a response from the API');
      return obj;
    },

    () => {
      console.log('Got a response from the API');
      return new Error();
    },
  );
}
