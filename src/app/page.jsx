import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          We are a creative agency that specializes in creating beautiful
          websites and application for our clients.
        </p>
        <div className={styles.btns}>
          <button className={styles.btn}>Learn more</button>
          <button className={styles.btn}>Contac</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="Brands image."
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt="Hero gif image showing creativity"
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};
export default Home;
