import styles from "../styles/Recomendation.module.css";
import { useState } from "react";

export default function Recommendation({ people }) {
  console.log(people);
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
