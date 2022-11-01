import React from "react";
import productList from "../Data/data";
import Layout from "../Components/Layout";
import ProductScreen from "./ProductScreen";
import { Box } from "@mui/system";

const HomeScreen = (props) => {
  const { user } = props;

  return (
    <Layout user={user}>
      <Box display="flex" flexDirection="column" alignItems="center">
        {productList.map((product) => (
          <Box mb={4} key={product.id}>
            <ProductScreen productData={product} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default HomeScreen;
