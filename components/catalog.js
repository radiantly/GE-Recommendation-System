import styles from "../styles/Catalog.module.css";
import { toast } from "react-toastify";
import { products } from "./utils/popularProductsData";

const Catalog = () => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toast("ADDED_TO_CART: Interaction recorded", {
      hideProgressBar: true,
    });
  };
  return (
    <div className={styles.catalog_section}>
      <a id="catalog">
        <h1>Product Catalog</h1>
      </a>
      <div className={styles.grid}>
        {products.map((product) => (
          <a href={product.item_link} target="_blank" key={product.item_name}>
            <div className={styles.card}>
              <img src={product.image} />
              <div className={styles.card_row}>
                <div className={styles.card_title}>{product.item_name}</div>
                <div className={styles.add_to_cart} onClick={handleAddToCart}>
                  Add to cart
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
export default Catalog;
