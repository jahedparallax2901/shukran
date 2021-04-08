export const userIsLoggedIn = () => {
  const user = localStorage.getItem('user');
  return !!user;
};

export const userData = () => {
  const user = localStorage.getItem('user');
  return JSON.parse(user);
}

const userInfo = userData();

export const reqHeaders = {
  "x-auth-token": userInfo ? userInfo.token : '',
  "x-api-client": "web"
}
