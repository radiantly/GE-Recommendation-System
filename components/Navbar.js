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
  const [items,setItems]=useState([])
  const [text,setText]=useState('');
  const [suggestions, setSuggestions] = useState([]);

  
  useEffect(() => {

    const fetchRecs = async () => {
      for (let key in allItems) {
        if(key!='ITEM_ID') {
        allItems[key].ITEM_ID = key; 
        items.push(allItems[key]);
      }}
      setItems(items);

    };
    fetchRecs();



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

  const onChangeHandler = (text) =>{
    let matches= []
    setSuggestions([])
    const fuse = new Fuse(items, {
      keys: ['ITEM_NAME'],
    })  

    if(text.length > 0){
      const results=fuse.search(text)
      if(results.length>5){
        console.log("Search results : ",results.length)
      for(let i=0;i<5;i++){
        matches.push(results[i].item)
      }
    }

    setSuggestions(matches)
  }
  else{
    setSuggestions([])
  }
  setText(text)
}
function resetText(){
  setText('')
  setSuggestions([])
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
          <input placeholder="Search for products..." onChange={e=>onChangeHandler(e.target.value)} value={text} />
          <div className={styles.suggestionsContainer}>
              {suggestions && suggestions.map((suggestion,i)=>
                <div key={i} className={styles.suggest} onClick={resetText}>  
                <Link href={`/store/${suggestion.ITEM_ID}`}>
                {suggestion.ITEM_NAME}</Link>
                </div> )}
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
