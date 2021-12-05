import Head from "next/head";

import { useState } from "react";

import styles from "../../styles/History.module.css";
import * as data from "../../Misc/user_actions.json";
import * as items from "../../Misc/items.json";

const History = ({ currentUser }) => {
  const [currentImg, setCurrentImg] = useState(null);

  return (
    <>
      <Head>
        <title>History | User {currentUser + 10000}</title>
      </Head>
      <div className={styles.main_container}>
        <h2 className={styles.heading}>
          History for User {currentUser + 10000}
        </h2>
        <div className={styles.tableWrap}>
          <table className={styles.previously_clicked}>
            <thead>
              <tr>
                <th></th>
                <th>Item ID</th> <th>Action</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            {[...data[currentUser]].reverse().map((action_row, index) => {
              let [id, action, timestamp] = action_row;

              // Normalize timestamp
              timestamp -= 60 * 60 * 24 * 60;
              const { ITEM_NAME, ITEM_IMAGE_LINK, ITEM_PRODUCT_LINK } =
                items[id];
              return (
                <tr
                  key={`${currentUser} ${index}`}
                  onMouseOver={(e) => setCurrentImg(ITEM_IMAGE_LINK)}
                  onMouseOut={(e) => setCurrentImg(null)}
                >
                  <td>
                    <img src={ITEM_IMAGE_LINK} />
                  </td>
                  <td>
                    {ITEM_NAME}{" "}
                    <a href={ITEM_PRODUCT_LINK} target="_blank">
                      ({id})
                    </a>
                  </td>
                  <td>{action}</td>
                  <td>
                    {timestamp}{" "}
                    <span className={styles.timedate}>
                      ({new Date(timestamp * 1000).toLocaleString()})
                    </span>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <div
        className={[styles.img_popover, currentImg ? "" : styles.hidden].join(
          " "
        )}
      >
        <img src={currentImg} />
      </div>
    </>
  );
};

export default History;

export async function getStaticProps({ params: { user } }) {
  const currentUser = user - 10000;
  if (isNaN(currentUser) || currentUser < 0 || currentUser >= 1000)
    return {
      notFound: true,
    };

  return {
    props: {
      currentUser,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { user: "10000" } }, // See the "paths" section below
    ],
    fallback: "blocking", // See the "fallback" section below
  };
}
