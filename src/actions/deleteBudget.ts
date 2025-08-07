import { redirect } from "react-router-dom";
import toast from "react-hot-toast";
import { deleteItem, getAllMatchingItems } from "../helper";


export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense: { key: string; id: string }) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    toast.success("Budget deleted successfully!");
  } catch (error: unknown) {
    console.error(error);
    throw new Error("There was a problem deleting your budget.");
  }
  return redirect("/");
}
