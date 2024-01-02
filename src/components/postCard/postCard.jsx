import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/13926757/pexels-photo-13926757.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.desc}>
          {post.body}
          {/* In a chic and inviting space, the café boasts an elegant black and
          white theme. The polished bar counter stands as the centerpiece,
          adorned with gleaming coffee cups and a modern coffee machine.
          Reflective mirrors tastefully complement the ambiance, while
          meticulously arranged plates add a touch of sophistication to this
          charming setting. */}
        </p>
        <Link className={styles.link} href="/blog/post">
          Read more
        </Link>
      </div>
    </div>
  );
};
export default PostCard;
