import Cookies from 'js-cookie';

export const persistCookie = (key: string, value: any) => {
  const serializedValue = JSON.stringify(value);
  Cookies.set(key, serializedValue, { expires: 7, path: '/' }); // Asegúrate de que expires y path sean correctos
  console.log('Cookie guardada:', { key, serializedValue });
};

export const getCookie = (key: string) => {
  const cookie = Cookies.get(key);
  return cookie ? JSON.parse(cookie) : null;
};

export const clearCookie = (key: string) => {
  Cookies.remove(key);
};