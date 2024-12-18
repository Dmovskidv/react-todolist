import { FC, memo, useRef } from "react";
import { ITask } from "../../../interfaces/index.ts";
import useAppNavigation from "../../../hooks/useAppNavigation.ts";
import styles from "../TasksList.module.scss";

interface ITaskProps {
  task: ITask;
  onRemove: (ref: React.RefObject<HTMLDivElement>) => void;
  onComplete: () => void;
}

const Task: FC<ITaskProps> = ({ task, onRemove, onComplete }) => {
  const { navigateForm } = useAppNavigation();
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={elementRef} className={styles.task}>
      <div className={styles.info}>
        <div className={styles.title}>
          <span>Title: </span>
          <span>{task.title}</span>
        </div>
        <div className={styles.detail}>
          <span>Detail: </span>
          <span>{task.detail}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <img
          alt="edit"
          src="/react-todolist/images/pencil.svg"
          onClick={() => navigateForm(task.id)}
        />
        <img
          alt="remove"
          src="/react-todolist/images/trash.svg"
          onClick={() => onRemove(elementRef)}
        />
        <img
          alt="status"
          src={`/react-todolist/images/checkCircle${
            task.completed ? "-completed" : ""
          }.svg`}
          onClick={onComplete}
        />
      </div>
    </div>
  );
};

export default memo(Task);
