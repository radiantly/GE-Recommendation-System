import React from "react";
import {Card, CardMedia, CardActions, CardContent, Typography, IconButton} from '@material-ui/core'
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from './styles'

const Product = ({product}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>

                </div>
                <Typography variant="body2" color="textSecondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>

        </Card>

    )
}

export default Product;