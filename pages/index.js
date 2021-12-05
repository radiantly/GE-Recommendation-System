import Head from "next/head";
import Catalog from "../components/catalog";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductCatalog from "../components/ProductCatalog";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GE Healthcare</title>
        <meta name="description" content="GE Healthcare" />
      </Head>
      <Navbar showToolTip={true} />
      <Hero />
      <Catalog />
    </div>
  );
}
