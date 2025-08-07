// rrd imports
import { BiTrash } from "react-icons/bi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { Form, Link } from "react-router-dom";
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helper";
import type { BudgetType } from "../types";

interface Props {
  budget: BudgetType;
  showDelete?: boolean;
}
const BudgetItem = ({ budget, showDelete = false }: Props) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div
      className="budget"
      style={
        {
          "--accent": color,
        } as React.CSSProperties
      }
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
      {showDelete ? (
        <div className="flex-sm">
          <Form
            method="post"
            action="delete"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Are you sure you want to permanently delete this budget?"
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn">
              <span>Delete Budget</span>
              <BiTrash width={20} />
            </button>
          </Form>
        </div>
      ) : (
        <div className="flex-sm">
          <Link to={`/budget/${id}`} className="btn">
            <span>View Details</span>
            <FaMoneyBill1Wave width={20} />
          </Link>
        </div>
      )}
    </div>
  );
};
export default BudgetItem;
