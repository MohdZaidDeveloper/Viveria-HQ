import Navbar from "../../../Components/Navbar";

import "../ContactUs.css"
const Header = () => {
  return (
    <>
      <Navbar />
      <header className="contact-header">
        <h1>
          Want to find out more or get started with <span>Viveria HQ?</span>
        </h1>
      </header>
    </>
  );
};

export default Header;
