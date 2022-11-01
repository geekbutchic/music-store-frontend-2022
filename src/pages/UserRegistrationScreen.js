import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Layout from "../Components/Layout";
// import axios from "axios";
import Axios from "../utils/Axios";

const UserRegistrationPage = () => {


  const [userRegistrationForm, setUserRegistrationForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profilePicture: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Axios.post(`/register-user`, {
      ...userRegistrationForm,
    });
    const {user} = response.data;
    
  };

  return (
    <Layout>
      <Box mb={4}>
        <Typography fontWeight="bold">Create User Account</Typography>
      </Box>
      <form action="submit" onSubmit={UserRegistrationPage}>
        <Box mb={4}>
          <TextField
            id="firstName"
            label="First Name"
            value={userRegistrationForm.firstName}
            onChange={(event) =>
              setUserRegistrationForm({
                ...userRegistrationForm,
                firstName: event.target.value
              })
            }
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="lastName"
            label="Last Name"
            value={userRegistrationForm.lastName}
            onChange={(event) =>
              setUserRegistrationForm({
                ...userRegistrationForm,
                lastName: event.target.value
              })
            }
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="email"
            label="Email"
            value={userRegistrationForm.email}
            onChange={(event) =>
              setUserRegistrationForm({
                ...userRegistrationForm,
                email: event.target.value
              })
            }
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="password"
            label="Password"
            value={userRegistrationForm.password}
            onChange={(event) =>
              setUserRegistrationForm({
                ...userRegistrationForm,
                password: event.target.value
              })
            }
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="profilePicture"
            label="Profile Picture URL"
            value={userRegistrationForm.profilePicture}
            onChange={(event) =>
              setUserRegistrationForm({
                ...userRegistrationForm,
                profilePicture: event.target.value
              })
            }
            required
          />
        </Box>
      </form>
    </Layout>
  );
};

export default UserRegistrationPage;
