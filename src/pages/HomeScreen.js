import productList from "../Data/data";
import Layout from "../Components/Layout";
import ProductScreen from "./ProductScreen";
import { Box } from "@mui/system";

import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

const HomeScreen = () => {
  const { addToCart } = useContext(cartContext);

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center">
        {productList.map((product) => (
          <Box mb={4} key={product.id}>
            <ProductScreen productData={product} addToCart={addToCart} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default HomeScreen;
