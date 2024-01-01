import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>Digital Solutions at Their Best</h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <dic className={styles.box}>
            <h2>1 K+</h2>
            <p>Year of experience.</p>
          </dic>
          <dic className={styles.box}>
            <h2>60 K+</h2>
            <p>People reached</p>
          </dic>
          <dic className={styles.box}>
            <h2>85 K+</h2>
            <p>Services and Plugins</p>
          </dic>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          fill
          alt="Bacground img of about page."
          className={styles.img}
        />
      </div>
    </div>
  );
};
export default AboutPage;
