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
            {[...data[currentUser]].reverse().map((action_row, index) => (
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
  if (isNaN(currentUser))
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
