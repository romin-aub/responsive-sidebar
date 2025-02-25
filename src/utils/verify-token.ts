export const verifyToken = (token: string, username: string) => {
  if (!token || !username) {
    return false;
  }
  return token === btoa(username);
};
