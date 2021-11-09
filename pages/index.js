import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductCatalog from "../components/ProductCatalog";
import styles from "../styles/Home.module.css";
import Recommendation from "../components/Recommendation";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GE Healthcare</title>
        <meta name="description" content="GE Healthcare" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Hero />
      <ProductCatalog />
      <Recommendation />
    </div>
  );
}
