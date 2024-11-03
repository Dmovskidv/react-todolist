import { StateCreator } from "zustand";

export interface IAccount {
  email: string | null;
  displayName: string | null;
}

export type AccountStore = {
  account: IAccount | null;
  setAccount: (accountInfo: IAccount | null) => void;
};

const createAccountSlice: StateCreator<
  AccountStore,
  [["zustand/devtools", never]],
  [],
  AccountStore
> = (set) => ({
  account: null,
  setAccount: (account: IAccount | null) =>
    set(() => ({ account }), undefined, "account/addAccount"),
});

export default createAccountSlice;
