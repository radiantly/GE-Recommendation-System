import Navbar from "./Navbar";

import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.main_container}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
