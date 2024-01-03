"use client";

import styles from "./adminPostForm.module.css";
import { addPost } from "@/lib/actions";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h2>Add a new post</h2>
      <input type="hidden" name="userId" value={userId} />
      <input
        type="text"
        name="title"
        placeholder="Enter your title"
        autoComplete="on"
      />
      <input
        type="text"
        name="slug"
        placeholder="Enter your slug"
        autoComplete="on"
      />
      <input type="text" name="img" placeholder="Enter your image" />
      <textarea
        type="text"
        name="desc"
        placeholder="Enter your description"
        rows={10}
        autoComplete="on"
      />
      <button>Add</button>
      {state && state.error}
    </form>
  );
};
export default AdminPostForm;
