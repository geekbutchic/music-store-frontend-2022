import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import HomeScreen from "./pages/HomeScreen";
import SignInPage from "./pages/SignInPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
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

  //SHOPPING CART STATE
  const shoppingCartInitialState = [];
  const [shoppingCart, setShoppingCart] = useState(shoppingCartInitialState);

  const addToCart = (productData) => {
    const productFound = shoppingCart.find(
      (cartItem) => cartItem.id === productData.id
    );
    if (productFound) {
      const newShoppingCart = shoppingCart.map((cartItem) => {
        if (cartItem.id === productFound.id) {
          const newItemQuantity = cartItem.quantity + 1;
          return {
            ...cartItem,
            quantity: newItemQuantity,
            total: newItemQuantity * cartItem.price
          };
        }
        return cartItem;
      });
      setShoppingCart(newShoppingCart);
    } else {
      //IF WE DON'T FIND PRODUCT ADD TO SHOPPING CART FOR FIRST TIME...
      const newCartItem = {
        ...productData,
        quantity: 1,
        total: productData.price
      };
      setShoppingCart([...shoppingCart, newCartItem]);
    }
  };

  const removeFromCart = (productId) => {
    setShoppingCart(
      shoppingCart.filter((cartItem) => cartItem.id !== productId)
    );
  };

  const emptyCart = () => {
    setShoppingCart(shoppingCartInitialState);
  };

  // console.log(`USER STATE APP.JS: `, user);
  console.log(`SHOPPING CART STATE: `, shoppingCart);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomeScreen user={user} addToCart={addToCart} />}
      />
      <Route
        path="/sign-in"
        element={<SignInPage user={user} signIn={signIn} signOut={signOut} />}
      />
      <Route
        path="/cart"
        element={
          <ShoppingCartPage
            shoppingCart={shoppingCart}
            removeFromCart={removeFromCart}
            emptyCart={emptyCart}
          />
        }
      />
    </Routes>
  );
};

export default App;
