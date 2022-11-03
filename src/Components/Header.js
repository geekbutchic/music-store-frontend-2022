import * as React from "react";
import { Card, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { AccountCircle } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header(props) {
  const { user } = props;
  // console.log(`USER PROPS: `, props);
  return (
    <Card>
      <AppBar
        position="static"
        style={{
          backgroundColor: "rgb(80,80,80)",
          height: "100px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width={1}>
            <Link to="/">
              <Typography
                variant="h5"
                fontWeight="bold"
                color="black"
                component="div"
              >
                ADAGIO
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/sign-in">
              {user ? (
                <IconButton>
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "20px"
                    }}
                    src={user.profilePicture}
                    alt="profile"
                  ></img>
                </IconButton>
              ) : (
                <IconButton
                  sx={{ m: 2 }}
                  variant="contained"
                  style={{ backgroundColor: "grey", color: "black" }}
                >
                  <AccountCircle />
                </IconButton>
              )}
            </Link>
          </Box>
          <Box>
            <Link to="/cart">
              <Button
                style={{ backgroundColor: "grey", color: "black" }}
                variant="contained"
              >
                <ShoppingCartIcon />
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Card>
  );
}
