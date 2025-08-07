import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";

const DashboardPage = () => {
  const { userName } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default DashboardPage;
