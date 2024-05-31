import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const response = [{ status: 'success', value: values[0] }];
      return response;
    })
    .catch((error) => {
      const response = [{ status: 'failure', value: error }];
      return response;
    });
}
