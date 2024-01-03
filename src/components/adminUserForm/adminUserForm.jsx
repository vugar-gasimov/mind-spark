"use client";
import styles from "./adminUserForm.module.css";
import { addUser } from "@/lib/actions";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h2>Add a new user</h2>

      <input type="text" name="username" placeholder="Enter your username" />
      <input type="email" name="email" placeholder="Enter your email" />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <input type="text" name="img" placeholder="Enter your image" />
      <select name="isAdmin">
        <option value="false">Is admin ?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};
export default AdminUserForm;
