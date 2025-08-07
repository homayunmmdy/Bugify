import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";


const DashboardPage = () => {
  const { userName } = useLoaderData();
  return (
    <>{userName ? <div className="dashboard">Dashboard</div> : <Intro />}</>
  );
};

export default DashboardPage;
