import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";


import { useTypewriter } from "react-simple-typewriter";

const Header = () => {

  const { text } = useTypewriter({
    words: ["Earned wage access to employees", "Financial wellbeing"],
    loop: 0,
  });

  return (
    <>
      <Navbar />
      <header className="home-header">
        <h1>Viveria HQ accelerates</h1>
        <div className="white-background">
          <h2> {text}| </h2>
        </div>

  

        <h3>Financial wellbeing for every worker.</h3>

        <Link to="/contact-us">
          <button>Get Started</button>
        </Link>
      </header>
    </>
  );
};

export default Header;
