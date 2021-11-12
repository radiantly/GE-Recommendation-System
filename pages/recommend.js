import Navbar from "../components/Navbar";
import Head from "next/head";
import Recommendation from "../components/Recommendation";
import faker from "faker";

import homeStyles from "../styles/Home.module.css";

export default function RecommenderPage({ people }) {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>GE Healthcare - Recommend</title>
      </Head>
      <Navbar />
      <Recommendation people={people} />
    </div>
  );
}

export async function getStaticProps() {
  const people = ["Lucy Ann"];

  for (let i = 0; i < 999; i++) {
    people.push(faker.name.findName());
  }

  return {
    props: {
      people,
    },
  };
}
