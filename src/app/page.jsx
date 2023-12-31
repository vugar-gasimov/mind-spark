import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className="styles.container">
      <dic className="sttles.textContainer">
        <h1>Creative Thoughts Agency</h1>
        <p>
          We are a creative agency that specializes in creating beautiful
          websites and application for our clients.
        </p>
        <div className={styles.btns}>
          <button className={styles.btn}>Learn more</button>
          <button className={styles.btn}>Contac{styles.btn} </button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </dic>
      <dic className="sttles.imgContainer">
        <Image
          src="/hero.gif"
          alt="Hero gif image showing creativity"
          fill
          className={styles.heroImg}
        />
      </dic>
    </div>
  );
};
export default Home;
