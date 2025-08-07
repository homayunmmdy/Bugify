import "./Main.scss"
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainPage = () => {
  return (
    <div className="layout">
      <Nav />
      <main>
        <Outlet />
      </main>
      <img className="wave-img" src="wave.svg" alt="Image of wave" />
    </div>
  );
};

export default MainPage;
