import styles from "../styles/ProductCatalog.module.css";
import Products from "./Products/Products";

function Product() {
    return (
        <div className={styles.product__main}>
        <div className={styles.header__catalog}><h1> Product Catalog</h1></div>   
        <Products className={styles.products}/> 
        </div>
    )
}

export default Product;
