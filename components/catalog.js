import styles from "../styles/Catalog.module.css";
import { toast } from "react-toastify";
import { products } from "./utils/popularProductsData";
import Link from "next/link";
import Image from "next/image";

const Catalog = () => {
  // accept product name as parameter in handleAddtoCart function
  const handleAddToCart = (productID) => (e) => {
    e.preventDefault();
    toast.success(
      `Item ID: ${productID}\nADDED_TO_CART: Interaction recorded`,
      {
        hideProgressBar: false,
        autoClose: 5000,
      }
    );
  };
  return (
    <div className={styles.catalog_section}>
      <a id="catalog">
        <h1>Product Catalog</h1>
      </a>
      <details className={styles.help}>
        <summary>What is this?</summary>
        <p>
          This section shows the most popular items and is generated using the{" "}
          <em>Popularity Count</em> Amazon Personalize recipe. It recommends
          products to users that are not logged in, or new users that have not
          yet interacted with any product.
        </p>
        <p>
          When a guest user interacts with the products below, the various
          interactions are stored. Once they create or log in to an account,
          these interactions are associated with the account to provide{" "}
          <Link href="/recommend">
            <a>personalized user recommendations</a>
          </Link>
          .
        </p>
      </details>
      <div className={styles.grid}>
        {products.map((product) => (
          <Link href={`/store/${product.item_id}`} key={product.item_name}>
            <a>
              <div className={styles.card}>
                <Image
                  src={product.image}
                  alt={product.item_name}
                  width="1000"
                  height="1000"
                />
                <div className={styles.card_row}>
                  <div className={styles.card_title}>{product.item_name}</div>

                  <div
                    className={styles.add_to_cart}
                    onClick={handleAddToCart(product.item_id)}
                  >
                    Add to cart
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Catalog;
