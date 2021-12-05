import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Head from "next/head";

import { useEffect, useState } from "react";

const Navbar = ({ showToolTip }) => {
  const [toolTipVisible, setToolTipVisible] = useState(false);

  if (showToolTip)
    useEffect(() => {
      console.log("HERERERERE");
      const checkAndShowTip = () => {
        console.log(document.readyState);
        if (document.readyState == "complete") {
          console.log("DONE");
          setTimeout(setToolTipVisible, 1000, true);
          setTimeout(setToolTipVisible, 6000, false);
        }
      };
      document.addEventListener("readystatechange", checkAndShowTip);
      checkAndShowTip();
    }, []);

  return (
    <nav className={styles.navbar}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Link href="/">
        <a>
          <img className={styles.logo} src="/ge.svg" />
        </a>
      </Link>

      <Link href="/">
        <div className={[styles.box, styles.desktoponly].join(" ")}>
          <a className={styles.text}>GE Healthcare</a>
        </div>
      </Link>

      <Link href="/about">
        <div className={[styles.box, styles.desktoponly].join(" ")}>
          <a className={styles.text}>About</a>
        </div>
      </Link>
      <label className={[styles.searchbar, styles.desktoponly].join(" ")}>
        <span className="material-icons-outlined">search</span>
        <input placeholder="Search for products..." />
      </label>
      <div className={styles.spacer}></div>
      <Link href="/recommend">
        <div className={styles.box}>
          <a className={styles.text}>Login/Register</a>
          <div
            className={[
              styles.tooltip,
              toolTipVisible ? "" : styles.hidden,
            ].join(" ")}
          >
            See recommendations
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
