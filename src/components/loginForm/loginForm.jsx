"use client";

import { login } from "@/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="email" placeholder="Enter your email" name="email" />
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
      />

      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account ?"} <b>Register</b>
      </Link>
    </form>
  );
};
export default LoginForm;
