export type BudgetType = {
  id: string;
  name: string;
  amount: number;
  color: string;
  createdAt: number;
};

export type ExpenseType = {
  id: string;
  name: string;
  amount: number;
  budgetId: string;
  createdAt: number;
};
