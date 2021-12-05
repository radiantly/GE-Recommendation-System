import Head from "next/head";
import Catalog from "../components/catalog";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <>
      <Head>
        <title>GE Healthcare</title>
        <meta name="description" content="GE Healthcare" />
      </Head>
      <Hero />
      <Catalog />
    </>
  );
}
