import { useLoaderData } from "react-router-dom";
import AddBudgetForm from "../components/AddBudgetForm";
import Intro from "../components/Intro";
import "./Dashboard.scss";
import BudgetItem from "../components/BudgetItem";
import type { BudgetType } from "../types";

const DashboardPage = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm />
                </div>
                <h2>Existing Budgets</h2>
                <div className="budgets">
                  {budgets.map((budget: BudgetType) => (
                    <BudgetItem key={budget.id} budget={budget} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid-sm">
                <p>Personal budgeting is the secret to financial freedom.</p>
                <p>Create a budget to get started!</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default DashboardPage;
