import Head from "next/head";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.main_container}>
        <h2>About</h2>
        <p>
          This website is a part of our project for the GE Hack-E-LTH Hackathon.
          It showcases a proof-of-concept of how Amazon Personalize can be used
          to enhance user experience by generating relevant product suggestions.
          Find our project demo video below:
        </p>
        <p className={styles.video}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/F2FVdTB1JAY"
            title="Project Demo on YouTube"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
            allowFullScreen
          ></iframe>
        </p>
        <p>
          {" "}
          Built by{" "}
          <a
            href="https://github.com/radiantly"
            target="_blank"
            rel="noreferrer"
          >
            Arun Joshua
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/samyuktha-thiruvengadam-90495b179/"
            target="_blank"
            rel="noreferrer"
          >
            Samyuktha
          </a>
          ,{" "}
          <a
            href="https://github.com/san-coding"
            target="_blank"
            rel="noreferrer"
          >
            Sandeep Rajakrishnan
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/VighneshShankar23"
            target="_blank"
            rel="noreferrer"
          >
            Vighnesh Shankar
          </a>{" "}
          under the guidance of{" "}
          <a
            href="https://www.linkedin.com/in/prasanna-hebbar-3927a64/"
            target="_blank"
            rel="noreferrer"
          >
            Prasanna Hebbar
          </a>
          . Find the source code{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/radiantly/GE"
          >
            on GitHub
          </a>
          .
        </p>
      </div>
    </>
  );
}
