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
      <div className={styles.dropdown}>
        <a className={styles.text}>Login/Register</a>
                    <div className={styles.dropdown_content}>
                        <a href="#">User 1</a>
                        <a href="#">User 2</a>
                        <a href="#">User 3</a>
                        <a href="#">User 4</a>
                        <a href="#">User 5</a>
                        <a href="#">User 6</a>
                    </div>
                </div> 
    </nav>
  );
};

export default Navbar;
