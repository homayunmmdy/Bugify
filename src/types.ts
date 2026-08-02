export type BudgetType = {
  id: string;
  name: string;
  budgetId: string;
  amount: number;
  color: string;
  createdAt?: number;
};

export type ExpenseType = {
  id?: string;
  name: FormDataEntryValue;
  amount: FormDataEntryValue;
  budgetId: FormDataEntryValue;
  createdAt? : string;
};
