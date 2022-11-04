import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import Layout from "../Components/Layout";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

//USE CONTEXT PROVIDER
import { useContext } from "react";
import { cartContext } from "../context/cartContext";

const ShoppingCartPage = () => {
  const { shoppingCart, removeFromCart, emptyCart } = useContext(cartContext);

  return (
    <Layout>
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={6}
      />
      {shoppingCart.map((cartItem) => {
        return (
          <Box mb={3} key={cartItem.id}>
            <CartItem cartItem={cartItem} removeFromCart={removeFromCart} />
          </Box>
        );
      })}
      <Box mb={3}>
        <Button fullWidth={true} variant="contained">
          Checkout
        </Button>
      </Box>
      <Box mb={3}>
        <Button onClick={emptyCart} fullWidth={true} variant="contained">
          <DeleteForeverIcon /> Empty Cart
        </Button>
      </Box>
      <Link to="/">
        <Box>
          <Button fullWidth={true} variant="contained">
            Home
          </Button>
        </Box>
      </Link>
    </Layout>
  );
};

export default ShoppingCartPage;
