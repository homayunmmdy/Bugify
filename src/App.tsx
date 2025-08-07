import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./layout/Main";
import ErrorPage from "./pages/Error";
import DashboardPage from "./pages/Dashboard";
import { dashboardAction, dashboardLoader } from "./util/DashboardUtilities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    // loader: mainLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <ErrorPage />,
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;