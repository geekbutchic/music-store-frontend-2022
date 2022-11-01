import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import SignInPage from "./pages/SignInPage";
import "./App.css";

const App = () => {
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

  console.log(`USER STATE: `, user);

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} user={user} />
      <Route
        path="/sign-in"
        element={<SignInPage user={user} signIn={signIn} signOut={signOut} />}
      />
    </Routes>
  );
};

export default App;
