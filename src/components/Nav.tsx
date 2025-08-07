import './nav.scss'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src='/logo-mark.svg' alt="Image of home" height={30} width={30} />
        <span>bugify</span>
      </NavLink>
    </nav>
  );
};
export default Nav;
