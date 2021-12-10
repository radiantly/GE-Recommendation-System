import styles from "../styles/Hero.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);
  return (
    <section className={styles.hero_section} >
      <div className={styles.main}>
        <div className={styles.text} data-aos="fade-right">
          <div className={styles.big} >GE Healthcare</div>
          <div className={styles.tagline}>
            Improving lives in the moments that matter
          </div>
          <div className={styles.para}>
            We enable faster, more personalised decisions through intelligent
            devices, data, analytics, applications and services.
          </div>
          <a href="#catalog">
            <button className={styles.btn}>Browse our products</button>
          </a>
        </div>
        <div className={styles.pic} data-aos="fade-left">
          <img src="ge-promo.webp" />
        </div>
      </div>
      <div className={styles.godown_wrap}>
        <a href="#catalog" className={styles.godown_box}>
          Product Catalog
          <span className="material-icons-round">keyboard_arrow_down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
