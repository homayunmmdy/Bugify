import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { deleteBudget } from "./actions/deleteBudget";
import { logoutAction } from "./actions/logout";
import { loadUserName } from "./helper";
import MainPage from "./layout/Main";
import BudgetPage from "./pages/Budget";
import DashboardPage from "./pages/Dashboard";
import ErrorPage from "./pages/Error";
import { budgetAction, budgetLoader } from "./util/Budget";
import { dashboardAction, dashboardLoader } from "./util/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: loadUserName,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          style: {
            fontSize: "15px",
            fontWeight: "normal",
          },
        }}
      />
    </div>
  );
}

export default App;
