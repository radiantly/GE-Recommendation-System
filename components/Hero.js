import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.main}>
        <div className={styles.text}>
          <div className={styles.big}>GE Healthcare</div>
          <div className={styles.tagline}>
            Improving lives in the moments that matter
          </div>
          <div className={styles.para}>
            We enable faster, more informed decisions through intelligent
            devices, data, analytics, applications and services.
          </div>
          <a href="#catalog">
            <button className={styles.btn}>Browse our products</button>
          </a>
        </div>
        <div className={styles.pic}>
          <img src="ge-promo.webp" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
