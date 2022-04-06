import React from 'react'
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <>
      <section className="employee-form">
        <img
          src={require("../../../Assets/employerImg1.png")}
          alt=""
          className="img1"
        />
        <img
          src={require("../../../Assets/employerImg2.png")}
          alt=""
          className="img2"
        />

        <img
          src={require("../../../Assets/employerImg3.png")}
          alt=""
          className="img3"
        />
        <img
          src={require("../../../Assets/employerImg4.png")}
          alt=""
          className="img4"
        />
     
        <div className="details">
          <h1>Want your company to offer Viveria HQ?</h1>
          <p>Viveria HQ benefit makes businesses work better for everyone</p>
          <Link to="/contact-us">
            <button>Tell my Employer about Viveria HQ</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Form