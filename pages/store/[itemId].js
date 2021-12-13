import styles from "../../styles/Store.module.css";
import { useState } from "react";

import * as items from "../../Misc/items.json";

export default function Store({ ITEM_PRODUCT_LINK }) {
  const [iFrameHeight, setIframeHeight] = useState("100vh");

  const loadHandler = (e) => {
    setIframeHeight(
      e.target.contentWindow.document.documentElement.scrollHeight + "px"
    );
  };
  const storeURL = ITEM_PRODUCT_LINK.replace(/^https?:\/\/[^/]+/, "");
  return (
    <>
      <div className={styles.iFrameWrap}>
        <div className={styles.loader}></div>
        <iframe
          style={{ height: iFrameHeight }}
          className={styles.storeFrame}
          src={storeURL}
          onLoad={loadHandler}
          scrolling="no"
        />
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
