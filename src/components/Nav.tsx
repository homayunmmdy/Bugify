import type { ReactNode } from "react";
import { BiTrash } from "react-icons/bi";
import { Form, NavLink } from "react-router-dom";
import "./nav.scss";

const Nav = ({ userName }: { userName: ReactNode }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src="/logo-mark.svg" alt="Image of home" height={30} width={30} />
        <span>bugify</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <BiTrash width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};
export default Nav;
