import homeStyles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div className={styles.main_container}>
        <h2>About</h2>
        <p>
          This website is a part of our project for the GE-Hack-E-Health
          Hackathon. It showcases a proof-of-concept of how Amazon Personalize
          can be used to enhance user experience by generating relevant product
          suggestions.
        </p>
        <p>
          {" "}
          Built by{" "}
          <a href="https://github.com/radiantly" target="_blank">
            Arun Joshua
          </a>
          ,{" "}
          <a href="https://github.com/samkeating" target="_blank">
            Samyuktha
          </a>
          ,{" "}
          <a href="https://github.com/san-coding" target="_blank">
            Sandeep Rajakrishnan
          </a>{" "}
          and{" "}
          <a href="https://github.com/VighneshShankar23" target="_blank">
            Vighnesh Shankar
          </a>{" "}
          under the guidance of{" "}
          <a
            href="https://www.linkedin.com/in/prasanna-hebbar-3927a64/"
            target="_blank"
          >
            Prasanna Hebbar
          </a>
          .
        </p>
      </div>
    </div>
  );
}
