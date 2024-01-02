"use server";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
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
