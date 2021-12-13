import styles from "../styles/Recomendation.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

import * as items from "../Misc/items.json";
import * as cached_recommendations from "../Misc/cached_rec.json";

export default function Recommendation({ people }) {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const [currentUser, setCurrentUser] = useState(0);

  const [recommendations, setRecommendations] = useState([]);

  const fetchRecs = async () => {
    // Realtime
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_PERSONALIZE_API_URL}?userID=${
    //     currentUser + 10000
    //   }`
    // );
    // const jsonResp = await response.json();

    // Cached
    const jsonResp = cached_recommendations[currentUser];
    setRecommendations(jsonResp.items);
    console.log(jsonResp);
  };

  useEffect(() => {
    fetchRecs();
  });

  const personChangeHandler = (index) => {
    setCurrentUser(index);
  };

  return (
    <div className={styles.recomendation__main}>
      <div className={styles.row}>
        <div className={styles.recommendation__header2}>
          See recommendations for&nbsp;
          <div className={styles.dropdown}>
            <a className={styles.recommendation__link1}>
              {people[currentUser]}
            </a>
            <div className={styles.dropdown_content}>
              {people.map((person, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => personChangeHandler(index)}
                >
                  {person}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Link href={`/history/${currentUser + 10000}`}>
          <a className={styles.showhistory}>Show customer history</a>
        </Link>
      </div>
      <div className={styles.recommendation__container} data-aos="fade-up">
        {recommendations.map((item) => (
          <Link href={`/store/${item.itemId}`} key={item.itemId}>
            <a className={styles.recommendation__square}>
              <Image
                src={items[item.itemId]["ITEM_IMAGE_LINK"]}
                alt={items[item.itemId]["ITEM_NAME"]}
                height="1000"
                width="1000"
              />
              <div className={styles.text} data-aos="fade-up">
                <div className={styles.textbox}>
                  <div className={styles.itemTitle}>
                    {items[item.itemId]["ITEM_NAME"]}
                  </div>
                  <div className={styles.itemId}>Product ID: {item.itemId}</div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
