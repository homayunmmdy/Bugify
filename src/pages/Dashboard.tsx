import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import './Dashboard.scss';
import AddBudgetForm from "../components/AddBudgetForm";

const DashboardPage = () => {
  const { userName,  } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            <p>Personal budgeting is the secret to financial freedom.</p>
            <p>Create a budget to get started!</p>
            <AddBudgetForm />
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default DashboardPage;
