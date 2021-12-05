import Head from "next/head";
import Recommendation from "../components/Recommendation";
import faker from "faker";

export default function RecommenderPage({ people }) {
  return (
    <>
      <Head>
        <title>GE Healthcare - Recommend</title>
      </Head>
      <Recommendation people={people} />
    </>
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
