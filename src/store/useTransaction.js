import create from 'zustand';

const useTransactionStore = create((set) => ({
  open: false,
  name: '',
  type: 'credit',
  category: 'shopping',
  amount: 0,
  date: '',
  setOpen: (value) => set({ open: value }),
  setName: (value) => set({ name: value }),
  setType: (value) => set({ type: value }),
  setCategory: (value) => set({ category: value }),
  setAmount: (value) => set({ amount: value }),
  setDate: (value) => set({ date: value }),
  transactions:[""],
  setTransactions: (value) => set({ transactions: value }),
}));

export default useTransactionStore;
