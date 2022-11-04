import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Box } from "@mui/system";

// Component is a function that returns elements
const Layout = (props) => {
  const { children } = props;

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box>
        <Header />
      </Box>
      <Box flexGrow={1} py={6} px={4}>
        {children}
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
