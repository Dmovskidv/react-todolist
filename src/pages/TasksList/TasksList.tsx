import Task from "./parts/Task";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/useAppStore";
import useTask from "../../hooks/useTask";
import useAnimation from "../../hooks/useAnimation";
import styles from "./TasksList.module.scss";
import "animate.css";

const TasksList = () => {
  const navigate = useNavigate();
  const tasks = useAppStore((state) => state.tasks);
  const filter = useAppStore((state) => state.filter);
  const { onRemove, onComplete } = useTask();
  const { withAnimation } = useAnimation();

  const displayTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.completed === true);

  return (
    <div className={styles.tasksList}>
      {displayTasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onRemove={withAnimation(() => onRemove(task.id))}
          onComplete={() => onComplete({ ...task, completed: !task.completed })}
        />
      ))}
      <div className={styles.action} onClick={() => navigate("/manage")}>
        +
      </div>
    </div>
  );
};

export default TasksList;
