import styles from "../styles/Recomendation.module.css";
import { useState, useEffect } from "react";

import * as data from "../Misc/user_actions.json";
import * as items from "../Misc/items.json";
import * as cached_recommendations from "../Misc/cached_rec.json";

export default function Recommendation({ people }) {
  const [currentUser, setCurrentUser] = useState(0);
  const [currentImg, setCurrentImg] = useState(null);

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
      <div className={styles.recomendation__header}>
        <h1>Get recommendation</h1>
      </div>
      <div className={styles.recommendation__header2}>
        See recommendations for&nbsp;
        <div className={styles.dropdown}>
          <a className={styles.recommendation__link1}>{people[currentUser]}</a>
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
      <div className={styles.tableWrap}>
        <table className={styles.previously_clicked}>
          <thead>
            <tr>
              <th></th>
              <th>Item ID</th> <th>Action</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          {data[currentUser].map((action_row, index) => (
            <tr
              key={`${currentUser} ${index}`}
              onMouseOver={(e) =>
                setCurrentImg(items[action_row[0]]["ITEM_IMAGE_LINK"])
              }
              onMouseOut={(e) => setCurrentImg(null)}
            >
              <td>
                <img src={items[action_row[0]]["ITEM_IMAGE_LINK"]} />
              </td>
              <td>
                <a
                  href={items[action_row[0]]["ITEM_PRODUCT_LINK"]}
                  target="_blank"
                >
                  {action_row[0]}
                </a>
              </td>
              <td>{action_row[1]}</td>
              <td>{action_row[2]}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className={styles.recommendation__container}>
        {recommendations.map((item) => (
          <div className={styles.recommendation__square}>
            <img src={items[item.itemId]["ITEM_IMAGE_LINK"]} />
          </div>
        ))}
      </div>
      <div
        className={[styles.img_popover, currentImg ? "" : styles.hidden].join(
          " "
        )}
      >
        <img src={currentImg} />
      </div>
    </div>
  );
}
