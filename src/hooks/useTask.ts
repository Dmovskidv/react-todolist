import { useParams } from "react-router-dom";
import useAppStore from "../store/useAppStore";
import { ITask } from "../interfaces/index.ts";
import { useCallback } from "react";
import useAppNavigation from "./useAppNavigation.ts";

const useTask = () => {
  const { navigateHome } = useAppNavigation();
  const { taskId } = useParams();
  const tasks = useAppStore((state) => state.tasks);
  const addTask = useAppStore((state) => state.addTask);
  const editTask = useAppStore((state) => state.editTask);
  const removeTask = useAppStore((state) => state.removeTask);
  const completeTask = useAppStore((state) => state.completeTask);

  const onSubmit = useCallback(
    (data: Partial<ITask>) => {
      if (taskId) {
        editTask({ ...data, id: taskId } as ITask);
      } else {
        addTask({ ...data, completed: false } as ITask);
      }
      navigateHome();
    },
    [addTask, editTask, taskId]
  );

  const onRemove = useCallback(
    (id?: string) => {
      if (id) {
        removeTask(id);
      }
    },
    [removeTask]
  );

  const onComplete = useCallback(
    (updatedTask: ITask) => {
      completeTask(updatedTask);
    },
    [completeTask]
  );

  return {
    task: tasks.find((task) => task.id === taskId),
    tasks,
    onSubmit,
    onRemove,
    onComplete,
    mode: taskId ? "edit" : "add",
  };
};

export default useTask;
