import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, toggleSidebar } from "../features/user/userSlice";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
          type="button"
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={`dropdown ${showLogout ? "show-dropdown" : ""}`}>
            <button
              type="button"
              onClick={() => dispatch(logOutUser())}
              className="dropdown-btn"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
