import styles from "../styles/Catalog.module.css";
import { toast } from "react-toastify";
import { products } from "./utils/popularProductsData";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const Catalog = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
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
      <div className={styles.grid}>
        {products.map((product) => (
          <a
            href={product.item_link}
            target="_blank"
            key={product.item_name}
            rel="noreferrer"
          >
            <div className={styles.card} data-aos="fade-up">
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
        ))}
      </div>
    </div>
  );
};
export default Catalog;
