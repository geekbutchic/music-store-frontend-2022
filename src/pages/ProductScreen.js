import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const ProductScreen = (props) => {
  const { productData, addToCart } = props;

  const onAddToCart = () => {
    addToCart(productData);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={productData.title} subheader={productData.brand} />
      <CardMedia
        component="img"
        height="300"
        image={productData.image}
        alt="cello for sale"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display="flex" justifyContent="space-between" width={1}>
          <Button onClick={onAddToCart}>ADD TO CART</Button>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductScreen;
