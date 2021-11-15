import styles from "../styles/Recomendation.module.css";
import { useState } from "react";

import * as data from "../Misc/user_actions.json";
import * as items from "../Misc/items.json";

export default function Recommendation({ people }) {
  const [currentUser, setCurrentUser] = useState(0);

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
          <a className={styles.recommendation__link1}>
            <u>{people[currentUser]}</u>
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
      <div className={styles.previously_clicked}>
        <div></div>
        <div>Item ID</div> <div>Action</div>
        <div>Timestamp</div>
        {data[currentUser].map((action_row) => [
          <div>
            <a href={items[action_row[0]]["ITEM_PRODUCT_LINK"]}>
              <img src={items[action_row[0]]["ITEM_IMAGE_LINK"]} />
            </a>
          </div>,
          <div>{action_row[0]}</div>,
          <div>{action_row[1]}</div>,
          <div>{action_row[2]}</div>,
        ])}
      </div>
      <div className={styles.recommendation__container}>
        <div className={styles.recommendation__square}></div>
        <div className={styles.recommendation__square}></div>
        <div className={styles.recommendation__square}></div>
        <div className={styles.recommendation__square}></div>
        <div className={styles.recommendation__square}></div>
        <div className={styles.recommendation__square}></div>
        <div className={styles.recommendation__square}></div>
        <div className={styles.recommendation__square}></div>
      </div>
    </div>
  );
}
