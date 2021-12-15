import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Fuse from "fuse.js";
import { useEffect, useState, useRef } from "react";
import * as allItems from "../Misc/items.json";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [toolTipVisible, setToolTipVisible] = useState(false);
  const triggeredOnce = useRef(false);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [inputFocused, setInputFocused] = useState(false);
  const [suggestionsClicked, setSuggestionsClicked] = useState(false);

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

  return (
    <nav className={styles.navbar}>
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
      <div className={styles.searchWrap}>
        <label className={[styles.searchbar, styles.desktoponly].join(" ")}>
          <span className="material-icons-outlined">search</span>
          <input
            placeholder="Search for products..."
            onChange={onChangeHandler}
            value={text}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
        </label>

        <div
          className={[
            styles.suggestionsWrap,
            suggestionsClicked || (text && inputFocused) ? "" : styles.hidden,
          ].join(" ")}
          onMouseDown={() => setSuggestionsClicked(true)}
          onMouseUp={() => setSuggestionsClicked(false)}
        >
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <Link
                href={`/store/${suggestion.ITEM_ID}`}
                key={`${i} ${suggestion.ITEM_NAME}`}
              >
                <a className={styles.suggestRow}>
                  <div className={styles.thumb}>
                    <Image
                      src={suggestion.ITEM_IMAGE_LINK}
                      alt=""
                      width="30"
                      height="30"
                    />
                  </div>
                  <div className={styles.suggestText}>
                    {suggestion.ITEM_NAME}
                  </div>
                </a>
              </Link>
            ))}
        </div>
      </div>
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
