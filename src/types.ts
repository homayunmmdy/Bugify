export type BudgetType = {
  id: string;
  name: string;
  budgetId: string;
  amount: number;
  color: string;
};

export type ExpenseType = {
  id?: string;
  name: FormDataEntryValue;
  amount: FormDataEntryValue;
  budgetId: FormDataEntryValue;
  createdAt? : string;
};
