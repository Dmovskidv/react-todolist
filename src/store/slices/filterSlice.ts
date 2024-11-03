import { StateCreator } from "zustand";

export type Filters = "all" | "completed";

export type FilterStore = {
  filter: Filters;
  setFilter: (filter: Filters) => void;
};

const createFilterSlice: StateCreator<
  FilterStore,
  [["zustand/devtools", never]],
  [],
  FilterStore
> = (set) => ({
  filter: "all",
  setFilter: (filter: Filters) =>
    set(() => ({ filter }), undefined, "filter/addFilter"),
});

export default createFilterSlice;
