import { createContext, useState } from "react";

export const cartContext = createContext();

const CartContextProvider = (props) => {
  const { children } = props;
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
    <cartContext.Provider
      value={{ addToCart, shoppingCart, removeFromCart, emptyCart }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
