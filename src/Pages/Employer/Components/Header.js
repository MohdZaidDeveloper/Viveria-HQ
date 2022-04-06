import { Link } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';


const Header = () => {
  return (
    <>
      <Navbar />
      <section className="employer-header">
        <div className="left-section">
          <h1>
            Be the place everyone wants to <span>work</span>
          </h1>
          <p>
            Help your employees fully engage in both work and life with our
            all-in-one Livelihood platform that takes a holistic approach in
            improving financial wellness and increasing employee satisfaction.
          </p>

          <Link to="/contact-us">
            <button>Request A Demo</button>
          </Link>
        </div>

        <div className="right-section">
          <img src={require("../../../Assets/laptopImg.png")} alt="" />
        </div>
      </section>
    </>
  );
}

export default Header