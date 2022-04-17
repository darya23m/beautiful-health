export const isSignedIn = () =>
  !!sessionStorage.getItem('accessToken');

export const getAccessToken = () =>
  sessionStorage.getItem('accessToken');

export const setAccessToken = (accessToken) => 
  sessionStorage.setItem('accessToken', accessToken);
