import styles from "./adminUsers.module.css";
import Image from "next/image";
import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/actions";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Admin Users</h1>
      {users.map((user) => (
        <div className={styles.post} key={user.id}>
          <div className={styles.detail}>
            <Image
              className={styles.img}
              src={user.img || "/noimage.jpeg"}
              alt={user.title}
              width={150}
              height={150}
            />
            <span className={styles.title}>{user.title}</span>
          </div>

          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.deleteBtn}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};
export default AdminUsers;
