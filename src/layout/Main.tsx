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
      <img src="wave.svg" alt="Image of wave" width={1521} height={141}/>
    </div>
  );
};

export default MainPage;
