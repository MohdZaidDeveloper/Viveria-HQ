import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const links = [
    {
      path: "/",
      page: "Home",
    },
    {
      path: "/about-us",
      page: "About Us",
    },
    {
      path: "/employer",
      page: "Employer",
    },
    {
      path: "/employee",
      page: "Employee",
    },
    {
      path: "/contact-us",
      page: "Contact Us",
    },
  ];

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src={require("../Assets/logo.png")}
            alt=""
          />
        </Link>
      </div>

      <div className={click ? "menu active" : "menu"}>
        <FaTimes
          style={{
            color: "#fff",
            position: "absolute",
            top: "45",
            right: "45",
          }}
          size={25}
          onClick={handleClick}
        />

        {links.map((link) => {
          const { path, page } = link;
          return (
            <NavLink
              to={path}
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "" };
              }}
            >
              {page}
            </NavLink>
          );
        })}
      </div>

      <div className="hamburger" onClick={handleClick}>
        <FaBars style={{ color: "#fff" }} size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
