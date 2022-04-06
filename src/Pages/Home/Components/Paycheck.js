import React from 'react'
import { Link } from 'react-router-dom';

const Paycheck = () => {
  return (
    <section className="paycheck">
      <p>The Future of employer-to-employee payments is here.</p>
      <h1>Ready to go beyond the paycheck?</h1>
      <Link to="/contact-us">
        <button>
          Contact Us
          <img src={require("../../../Assets/rightArrow.png")} alt="" />
        </button>
      </Link>
    </section>
  );
}

export default Paycheck