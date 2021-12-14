import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Store.module.css";

import * as items from "../../Misc/items.json";
import * as similar_items from "../../Misc/similar_items.json";

export default function Store({ ITEM_ID, ITEM_PRODUCT_LINK }) {
  const [iFrameHeight, setIframeHeight] = useState("100vh");
  const [simVisible, setSimVisible] = useState(false);

  useEffect(() => setTimeout(setSimVisible, 2000, true), []);

  const loadHandler = (e) => {
    setIframeHeight(
      e.target.contentWindow.document.documentElement.scrollHeight + "px"
    );
    setSimVisible(true);
  };
  const storeURL = ITEM_PRODUCT_LINK.replace(/^https?:\/\/[^/]+/, "");

  const arrowGen = (arrow, { onClick }) => {
    return (
      <div
        className={[styles[arrow], styles.arrow].join(" ")}
        onClick={onClick}
      >
        <span className="material-icons-round">{`arrow_${arrow}_ios`}</span>
      </div>
    );
  };

  const PrevArrow = arrowGen.bind(null, "back");
  const NextArrow = arrowGen.bind(null, "forward");

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
        <div
          className={[
            styles.simItemsWrap,
            simVisible ? "" : styles.hidden,
          ].join(" ")}
        >
          <h3>Similar items</h3>
          <Slider
            dots={false}
            infinite={true}
            slidesToShow={5}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
          >
            {similar_items[ITEM_ID].map((ITEM_ID) => (
              <div className={styles.sim_square} key={ITEM_ID}>
                <Link href={`/store/${ITEM_ID}`}>
                  <a>
                    <Image
                      src={items[ITEM_ID]["ITEM_IMAGE_LINK"]}
                      alt={items[ITEM_ID]["ITEM_NAME"]}
                      height="1000"
                      width="1000"
                    />
                    <div className={styles.itemTitle}>
                      {items[ITEM_ID]["ITEM_NAME"]}
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params: { itemId } }) {
  if (!(itemId in items))
    return {
      notFound: true,
    };

  return {
    props: {
      ITEM_ID: itemId,
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
