import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

const Footer = () => {
  const [userData, setUserData] = useState({
    email: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  //Submit Form data to firebase

  const submitData = async (event) => {
    event.preventDefault();
    const { email } = userData;

    if (email) {
      const res = await fetch(
        
        "https://mailing-list-76c50-default-rtdb.firebaseio.com/Mailling-List-Data.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      if (res) {
        setUserData({
          email: "",
        });
        alert("Thank you for providing you email!");
        window.location.reload();
      } else {
        alert("Something Went wrong!");
      }
    } else {
      alert("Please fill the field first!");
    }
  };

  return (
    <footer className="footer">
      <div className="upper">
        <div className="section1">
          <div className="logo">
            <img src={require("../Assets/logo.png")} alt="" />
          </div>

          <div className="company">
            <h2>Company</h2>
            <Link to="/about-us">About Us</Link>
            <Link to="/employer">Employer</Link>
            <Link to="/employee">Employee</Link>
          </div>

          <div className="links">
            <h2>Useful link</h2>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/faq">FAQs</Link>
          </div>
        </div>

        <div className="section2">
          <div className="sign-up">
            <h2>Sign up to our mailing list</h2>
            <div className="form">
              <form>
                <input
                  type="email"
                  placeholder="Your Company E-mail"
                  autoComplete="off"
                  required
                  name="email"
                  value={userData.email}
                  onChange={postUserData}
                />
                <button type="submit" onClick={submitData}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mail">
            <img src={require("../Assets/mail.png")} alt="" />
            <a href="mailto:Contact@viveriahq.com">Contact@viveriahq.com </a>
          </div>
        </div>
      </div>

      <div className="lower">
        <div className="border"></div>
        <div className="conclusion">
          <p>@2022 Viveria HQ. All rights reserved.</p>
          <p>
            Developed & Managed by @
            <span>
              <a href="https://inkprog.com/" style={{ color: "white" }}>
                Inkprog.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
