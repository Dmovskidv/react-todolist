import { useEffect } from "react";
import useAppStore from "../store/useAppStore";

const useFetchTasks = () => {
  const { getTasks } = useAppStore();
  useEffect(() => {
    getTasks();
  }, []);
};

export default useFetchTasks;
