import { useForm } from "react-hook-form";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import styles from "./Login.module.scss";

interface ICredentials {
  login: string;
  password: string;
}

const AddEditTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICredentials>({
    defaultValues: {
      login: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const auth = getAuth();
  const [authError, setAuthError] = useState<string>("");

  const onSubmit = async (data: ICredentials) => {
    try {
      await signInWithEmailAndPassword(auth, data.login, data.password);
      navigate("/");
    } catch (error) {
      setAuthError((error as Error).message || "General error");
      setTimeout(() => setAuthError(""), 3000);
      console.error("Auth error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <input
          {...register("login", { required: true })}
          className={clsx(styles.input, {
            [styles.error]: errors.login,
          })}
          placeholder="Login"
        />
        <input
          {...register("password", { required: true })}
          type="password"
          className={clsx(styles.input, {
            [styles.error]: errors.password,
          })}
          placeholder="Password"
        />
        <button type="submit" className={styles.btn}>
          Login
        </button>
        <div className={styles.authError}>{authError}</div>
      </div>
    </form>
  );
};

export default AddEditTask;
