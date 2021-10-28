import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <img className={styles.logo} src="ge.svg" />
      </Link>

      <Link href="/">
        <div className={[styles.box, styles.desktoponly].join(" ")}>
          <a className={styles.text}>GE Healthcare</a>
        </div>
      </Link>

      <Link href="/">
        <div className={[styles.box, styles.desktoponly].join(" ")}>
          <a className={styles.text}>About</a>
        </div>
      </Link>
      <label className={[styles.searchbar, styles.desktoponly].join(" ")}>
        <span className="material-icons-outlined">search</span>
        <input placeholder="Search for products..." />
      </label>
      <div className={styles.spacer}></div>
      <Link href="/">
        <div className={styles.box}>
          <a className={styles.text}>Login/Register</a>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
