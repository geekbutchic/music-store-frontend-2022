import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import Layout from "../Components/Layout";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ShoppingCartPage = (props) => {
  const { shoppingCart, removeFromCart, emptyCart } = props;

  return (
    <Layout>
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={6}
      />
      {shoppingCart.map((cartItem, index) => {
        return (
          <Box mb={3}>
            <CartItem
              key={index}
              cartItem={cartItem}
              removeFromCart={removeFromCart}
            />
          </Box>
        );
      })}
      <Box mb={3}>
        <Button fullWidth="true" variant="contained">
            Checkout
        </Button>
      </Box>
       <Box mb={3}>
      <Button onClick={emptyCart} fullWidth="true" variant="contained"><DeleteForeverIcon /> Empty Cart</Button></Box> 
      <Link to="/">
      <Box>
      <Button
      fullWidth="true"
      variant="contained"
      >
        Home
      </Button>
      </Box>
      </Link>
    </Layout>
  );
};

export default ShoppingCartPage;
