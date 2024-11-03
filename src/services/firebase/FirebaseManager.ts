import { ITask } from "../../interfaces/index.ts";
import { app } from "./firebaseConfig";
import {
  Database,
  getDatabase,
  ref,
  set,
  push,
  get,
  remove,
} from "firebase/database";

class FirebaseManager {
  private db: Database;

  constructor() {
    this.db = getDatabase(app);
  }

  // Fetch tasks from Realtime Database
  async getTasks(): Promise<ITask[]> {
    try {
      const dbRef = ref(this.db, "todo/tasks");
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        return Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        })) as ITask[];
      }
      return [];
    } catch (error) {
      console.error("Error getting tasks: ", error);
      throw error;
    }
  }

  async createTask(newTask: Omit<ITask, "id">): Promise<ITask | null> {
    try {
      const dbRef = ref(this.db, "todo/tasks");
      const result = await push(dbRef, newTask);

      if (result.key) {
        return {
          id: result.key,
          ...newTask,
        };
      }
      return null;
    } catch (error) {
      console.error("Error creating task: ", error);
      throw error;
    }
  }

  async updateTask(
    taskId: string,
    dataToUpdate: Partial<ITask>
  ): Promise<void> {
    try {
      const taskRef = ref(this.db, `todo/tasks/${taskId}`);
      await set(taskRef, dataToUpdate);
    } catch (error) {
      console.error("Error updating task: ", error);
      throw error;
    }
  }

  async deleteTask(taskId: string): Promise<void> {
    try {
      const taskRef = ref(this.db, `todo/tasks/${taskId}`);
      await remove(taskRef);
    } catch (error) {
      console.error("Error deleting task: ", error);
      throw error;
    }
  }
}

export default new FirebaseManager();
