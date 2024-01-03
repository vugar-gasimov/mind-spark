import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";

const AdminPosts = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      <h1>Admin Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image src={post.img || "/noimage.jpeg"} alt={post.title} />
            <span>{post.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AdminPosts;
