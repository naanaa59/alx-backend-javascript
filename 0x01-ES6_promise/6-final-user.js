import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((response) => response.map((each) => ({
      status: each.status,
      value: each.status === 'fulfilled' ? each.value : each.reason,
    })));
}
