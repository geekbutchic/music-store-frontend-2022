import { createContext, useState } from "react";

//CONTEXT FILE
export const userContext = createContext();

//COMPONENT TO PASS TO APP.JS
const UserContextProvider = (props) => {
  const { children } = props;
  //CLEAR OUT DATA
  const userInitialState = undefined;
  //USER STATE FOR USE IN MULTIPLE COMPONENTS - NEEDS TO BE UNDEFINED
  const [user, setUser] = useState(userInitialState);
  //SETS USER TO NEW STATE
  const signIn = (userData) => {
    setUser(userData);
  };
  //SET USER DATA BACK TO UNDEFINED
  const signOut = () => {
    setUser(userInitialState);
  };
  console.log(`USER CONTEXT: `, user);
  return (
    <userContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
