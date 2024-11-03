import { create } from "zustand";
import { devtools } from "zustand/middleware";
import createTaskSlice, { TaskStore } from "./slices/taskSlice";
import createFilterSlice, { FilterStore } from "./slices/filterSlice";
import createAccountSlice, { AccountStore } from "./slices/accountSlice";

type AppStore = TaskStore & FilterStore & AccountStore;

const useAppStore = create<AppStore>()(
  devtools((...args) => ({
    ...createTaskSlice(...args),
    ...createFilterSlice(...args),
    ...createAccountSlice(...args),
  }))
);

export default useAppStore;
