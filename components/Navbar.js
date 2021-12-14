import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Fuse from "fuse.js";
import { useEffect, useState, useRef } from "react";
import * as allItems from "../Misc/items.json";

const Navbar = () => {
  const router = useRouter();
  const [toolTipVisible, setToolTipVisible] = useState(false);
  const triggeredOnce = useRef(false);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const items = Object.entries(allItems).map(([ITEM_ID, ITEM_PROPERTIES]) => ({
    ITEM_ID,
    ...ITEM_PROPERTIES,
  }));

  const fuse = new Fuse(items, {
    keys: ["ITEM_NAME"],
  });

  useEffect(() => {
    const checkAndShowTip = () => {
      console.log(document.readyState);
      if (router.pathname === "/") {
        if (document.readyState === "complete" && !triggeredOnce.current) {
          setTimeout(setToolTipVisible, 1000, true);
          triggeredOnce.current = true;
          setTimeout(setToolTipVisible, 6000, false);
        }
      } else {
        setToolTipVisible(false);
      }
    };
    document.addEventListener("readystatechange", checkAndShowTip);
    checkAndShowTip();
  }, [router.pathname]);

  const onChangeHandler = (e) => {
    setSuggestions(
      (text = e.target.value)
        ? fuse
            .search(text)
            .slice(0, 5)
            .map((result) => result.item)
        : []
    );

    setText(text);
  };

  function resetText() {
    setText("");
    setSuggestions([]);
  }

  return (
    <nav className={styles.navbar} onClick={resetText}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Link href="/">
        <a>
          <img className={styles.logo} src="/ge.svg" alt="GE Healthcare" />
        </a>
      </Link>

      <Link href="/" passHref>
        <div className={[styles.box, styles.desktoponly].join(" ")}>
          <a className={styles.text}>GE Healthcare</a>
        </div>
      </Link>

      <Link href="/about" passHref>
        <div className={styles.box}>
          <a className={styles.text}>About</a>
        </div>
      </Link>
      <label className={[styles.searchbar, styles.desktoponly].join(" ")}>
        <span className="material-icons-outlined">search</span>
        <input
          placeholder="Search for products..."
          onChange={onChangeHandler}
          value={text}
        />
        <div className={styles.suggestionsContainer}>
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <div key={i} className={styles.suggest} onClick={resetText}>
                <Link href={`/store/${suggestion.ITEM_ID}`}>
                  {suggestion.ITEM_NAME}
                </Link>
              </div>
            ))}
        </div>
      </label>
      <div className={styles.spacer}></div>
      <Link href="/recommend" passHref>
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
