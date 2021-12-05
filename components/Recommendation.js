import styles from "../styles/Recomendation.module.css";
import { useState, useEffect } from "react";

import * as items from "../Misc/items.json";
import * as cached_recommendations from "../Misc/cached_rec.json";

export default function Recommendation({ people }) {
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
        <a
          href={`/history/${currentUser + 10000}`}
          className={styles.showhistory}
        >
          Show customer history
        </a>
      </div>
      <div className={styles.recommendation__container}>
        {recommendations.map((item) => (
          <element>
            <div className={styles.recommendation__square}>
              <img
                src={items[item.itemId]["ITEM_IMAGE_LINK"]}
                key={items[item.itemId]["ITEM_IMAGE_LINK"]}
              />
              <div className={styles.text}>
                <div className={styles.textbox}>
                  <div className={styles.itemTitle}>
                    {items[item.itemId]["ITEM_NAME"]}
                  </div>
                  <div className={styles.itemId}>Product ID: {item.itemId}</div>
                </div>
              </div>
            </div>
          </element>
        ))}
      </div>
    </div>
  );
}
