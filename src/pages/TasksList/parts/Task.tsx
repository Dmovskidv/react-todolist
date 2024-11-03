import { FC, memo, useRef } from "react";
import { ITask } from "../../../store/useAppStore";
import { useNavigate } from "react-router-dom";
import styles from "../TasksList.module.scss";

interface ITaskProps {
  task: ITask;
  onRemove: (ref: React.RefObject<HTMLDivElement>) => void;
  onComplete: () => void;
}

const Task: FC<ITaskProps> = ({ task, onRemove, onComplete }) => {
  const navigate = useNavigate();
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
          src="./images/pencil.svg"
          onClick={() => navigate(`/manage/${task.id}`)}
        />
        <img
          alt="remove"
          src="./images/trash.svg"
          onClick={() => onRemove(elementRef)}
        />
        <img
          alt="status"
          src={`./images/checkCircle${task.completed ? "-completed" : ""}.svg`}
          onClick={onComplete}
        />
      </div>
    </div>
  );
};

export default memo(Task);
