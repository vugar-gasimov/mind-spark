"use server";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {
  const { title, slug, desc, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      slug,
      desc,
      userId,
    });
    await newPost.save();
    console.log("saved to db");

    revalidatePath("/blog");
  } catch (err) {
    console.log(`Error in saving post: ${err}`);
    return { error: "Something went wrong!" };
  }
  console.log(title, slug, desc, userId);
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");

    revalidatePath("/blog");
  } catch (err) {
    console.log(`Error in saving post: ${err}`);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};
export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "Password do not match." };
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      img,
      password: hashedPassword,
    });
    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};
export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};
