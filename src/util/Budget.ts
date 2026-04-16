import toast from "react-hot-toast";
import { createExpense, deleteItem, getAllMatchingItems } from "../helper";
import type { BudgetType, ExpenseType } from "../types";

// @ts-ignore
export async function budgetLoader({ params }) {
  const budgets = await getAllMatchingItems<BudgetType>({
    category: "budgets",
    key: "id",
    value: params.id,
  });
  const budget = budgets[0];

  const expenses = await getAllMatchingItems<ExpenseType>({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });

  if (!budget) {
    throw new Error("The budget you're trying to find doesn't exist");
  }

  return { budget, expenses };
}

//@ts-ignore
export async function budgetAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} created!`);
    } catch (error: unknown) {
      console.log(error);
      throw new Error("There was a problem creating your expense.");
    }
  }

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Expense deleted!");
    } catch (e) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
}
