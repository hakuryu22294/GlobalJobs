import { NavLink } from "react-router-dom";
import links from "../utils/links";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, url, text, icon } = link;
        return (
          <NavLink
            key={id}
            to={url}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
