import Link from "next/link";
import Head from "next/head";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import data from "./utils/popularProductsData";
import styles from "../styles/Catalog.module.css";

const Catalog = () => {
    return (
        <div className={styles.catalog_div}>
            <h1>
                Product Catalog
            </h1>
            <Grid container spacing={3} className={styles.grid}>
                {data.products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.name}>
                        <Card className={styles.card}>
                            <CardActionArea href={product.item_link} target="_blank">
                                <CardMedia component="img" image={product.image} title={product.name}>
                                </CardMedia>
                                <CardContent>
                                    <Typography>
                                        {product.item_name}

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Typography className={styles.text}>
                                    <b> {product.item_family} </b>
                                </Typography>
                                <Button size="small" color="secondary">
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                ))}
            </Grid>
        </div>
    );
};
export default Catalog;