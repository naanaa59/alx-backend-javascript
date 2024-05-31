export default function getFullResponseFromAPI(success) {
  const objResp = {
    status: 200,
    body: 'Success',
  };
  if (success) {
    return Promise.resolve(objResp);
  }
  return Promise.reject(new Error('The fake API is not working currently'));
}
