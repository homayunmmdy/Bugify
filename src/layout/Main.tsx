import "./Main.scss"
import { Outlet, useLoaderData } from "react-router-dom";
import Nav from "../components/Nav";

const MainPage = () => {
  const { userName } = useLoaderData()
  return (
    <div className="layout">
      <Nav userName={userName}/>
      <main>
        <Outlet />
      </main>
      <img className="wave-img" src="/wave.svg" alt="Image of wave" />
    </div>
  );
};

export default MainPage;
