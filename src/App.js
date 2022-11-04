import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import SignInPage from "./pages/SignInPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import "./App.css";

//COMING FROM CONTEXT PROVIDER FILE
import UserContextProvider from "./context/userContext";
import CartContextProvider from "./context/cartContext";

const App = () => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </CartContextProvider>
    </UserContextProvider>
  );
};

export default App;
