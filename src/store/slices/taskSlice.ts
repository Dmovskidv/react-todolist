import { StateCreator } from "zustand";
import FirebaseManager from "../../services/firebase/FirebaseManager";
import { ITask } from "../../interfaces/index.ts";

export type TaskStore = {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (id: string) => void;
  editTask: (task: ITask) => void;
  completeTask: (task: ITask) => void;
  getTasks: () => void;
};

const createTaskSlice: StateCreator<
  TaskStore,
  [["zustand/devtools", never]],
  [],
  TaskStore
> = (set) => ({
  tasks: [],
  getTasks: async () => {
    try {
      const tasks = await FirebaseManager.getTasks();
      set({ tasks }); // You can simplify the set call
    } catch (err) {
      console.error(err);
    }
  },
  addTask: async (task: ITask) => {
    try {
      const createdTask = await FirebaseManager.createTask(task);
      if (createdTask) {
        set((state) => ({ tasks: [...state.tasks, createdTask] }));
      }
    } catch (err) {
      console.error(err);
    }
  },
  editTask: async (updatedTask: ITask) => {
    try {
      if (!updatedTask.id) return;

      const { id, ...dataToUpdate } = updatedTask;
      await FirebaseManager.updateTask(id, dataToUpdate);
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      }));
    } catch (err) {
      console.error(err);
    }
  },
  removeTask: async (taskId: string) => {
    try {
      await FirebaseManager.deleteTask(taskId);
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      }));
    } catch (err) {
      console.error(err);
    }
  },
  completeTask: async (updatedTask: ITask) => {
    try {
      const { id, ...dataToUpdate } = updatedTask;
      await FirebaseManager.updateTask(id, dataToUpdate);
      set((state) => ({
        tasks: state.tasks.map((task) => (task.id === id ? updatedTask : task)),
      }));
    } catch (err) {
      console.error(err);
    }
  },
});

export default createTaskSlice;
