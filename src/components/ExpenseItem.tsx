// rrd imports
import { BiTrash } from "react-icons/bi";
import { Link, useFetcher } from "react-router-dom";
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../helper";

interface Props {
  expense: {
    id: string;
    category: string;
    name: string;
    amount: number;
    createdAt: string;
    budgetId: string;
  };
  showBudget?: boolean;
}

const ExpenseItem = ({ expense, showBudget }: Props) => {
  const fetcher = useFetcher();

  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
      {showBudget && (
        <td>
          <Link
            to={`/budget/${budget.id}`}
            style={
              {
                "--accent": budget.color,
              } as React.CSSProperties
            }
          >
            {budget.name}
          </Link>
        </td>
      )}
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button
            type="submit"
            className="btn btn--warning"
            aria-label={`Delete ${expense.name} expense`}
          >
            <BiTrash width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};
export default ExpenseItem;
