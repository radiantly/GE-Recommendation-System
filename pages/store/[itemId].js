import styles from "../../styles/Store.module.css";

import * as items from "../../Misc/items.json";

export default function Store({ ITEM_PRODUCT_LINK }) {
  const storeURL = ITEM_PRODUCT_LINK.replace(/^https?:\/\/[^/]+/, "");
  return (
    <>
      <div className={styles.iFrameWrap}>
        <div className={styles.loader}></div>
        <iframe className={styles.storeFrame} src={storeURL} />
      </div>
    </>
  );
}

export async function getStaticProps({ params: { itemId } }) {
  console.log(itemId);
  if (!(itemId in items))
    return {
      notFound: true,
    };

  return {
    props: {
      ID: itemId,
      ...items[itemId],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
