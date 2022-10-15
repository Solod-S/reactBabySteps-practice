import { createContext } from 'react';

const authContext = createContext();
// const authContext = createContext({
//   user: 'asf',
//   logIn: () => console.log(`logIn`),
//   logOut: () => console.log(`logOut`),
// });
export default authContext;
