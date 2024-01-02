import Image from "next/image";
import styles from "./contact.module.css";
import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";
const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
  ssr: false,
});

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="Contact image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <HydrationTestNoSSR />
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and surname" />
          <input type="email" placeholder="Email address" />
          <input type="tel" placeholder="Phone number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
