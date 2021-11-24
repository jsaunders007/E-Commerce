import React from "react";
import {Grid} from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
{id: 1, name: "Shoes", description: "Running Shoes", price: "$5", image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_420,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/TD1MGYS_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_GEYSER_25e8814d-ce4f-4f8b-b96c-c9f32a71137a.png?v=1600891019"},
{id: 2, name: "MacBook", description: "Apple MacBook", price: "$10", image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418599_sd.jpg"},

];

const Products = () => {
    const classes = useStyles();
return (
<main className={classes.content}>
    <div className={classes.toolbar}/>
    <Grid container justify="center" spacing={4}>
{products.map((product) => {
    return (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
<Product product={product}/>
    </Grid>
    )
})}
    </Grid>
</main>
);
};

export default Products;