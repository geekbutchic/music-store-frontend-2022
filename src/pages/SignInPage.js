import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Layout from "../Components/Layout";
import sampleUserData from "../Data/data-2";

const SignInPage = (props) => {
    const { user, signIn, signOut} = props;
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: ""
  });

  //USER NEEDS TO BE LOGGED IN
  const onSubmit = () => {
    signIn(sampleUserData)
  };

  if(user) {
    return(
    <Layout user={user}>
        <Box>
        <Typography>
            Hi...
        {user.firstName}{" "}{user.lastName}!!!
        </Typography>
        </Box>
        <Button onClick={signOut}>Sign Out</Button>
    </Layout>
    );
  }

  return (
    <Layout user={user}>
      <Box mb={4}>
        <Typography>Sign In</Typography>
      </Box>
      <Box mb={4}>
        <TextField
          id="email"
          label="EMAIL"
          value={signInForm.email}
          onChange={(event) =>
            setSignInForm({
              ...setSignInForm,
              email: event.target.value
            })
          }
        ></TextField>
      </Box>
      <Box mb={4}>
        <TextField
          id="password"
          label="PASSWORD"
          value={signInForm.password}
          onChange={(event) =>
            setSignInForm({
              ...setSignInForm,
              password: event.target.value
            })
          }
        ></TextField>
      </Box>
      <Box>
        <Button variant="contained" onClick={onSubmit}>
          Sign In
        </Button>
      </Box>
    </Layout>
  );
};

export default SignInPage;
