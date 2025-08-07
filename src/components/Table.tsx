// component import
import ExpenseItem from "./ExpenseItem";

interface Props {
  expenses: {
    id: string;
    category: string;
    name: string;
    amount: number;
    createdAt: string;
    budgetId: string;
  }[];
  showBudget?: boolean;
}

const Table = ({ expenses, showBudget = true }: Props) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
              (i, index) => (
                <th key={index}>{i}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
