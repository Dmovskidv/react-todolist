import { useForm } from "react-hook-form";
import clsx from "clsx";
import useTask from "../../hooks/useTask";
import styles from "./TaskForm.module.scss";

const TaskForm = () => {
  const { task, onSubmit, mode } = useTask();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: task?.title || "",
      detail: task?.detail || "",
    },
  });

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", { required: true })}
          className={clsx(styles.input, {
            [styles.error]: errors.title,
          })}
          placeholder="Title"
        />
        <input
          {...register("detail", { required: true })}
          className={clsx(styles.input, {
            [styles.error]: errors.detail,
          })}
          placeholder="Detail"
        />
        <button type="submit" className={styles.btn}>
          {mode === "add" ? "Add" : "Edit"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
