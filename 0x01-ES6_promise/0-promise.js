export default function getResponseFromAPI() {
  const myPromise = new Promise(function(myResolver, myReject) {
    let success = true;
    if (success) {
      myResolver('Success');
    } else {
      myReject('Failure');
    }
  });
  return myPromise;
}