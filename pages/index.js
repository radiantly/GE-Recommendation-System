import Head from "next/head";
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Hero />
      <ProductCatalog />
    </div>
  );
}
