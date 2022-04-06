import React from 'react'
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <section className="employer-form">
      <div className="section1">
        <h1>
          Let’s work <br /> together
        </h1>
        <Link to="/contact-us">
          <button>Request a Demo</button>
        </Link>
      </div>

      <div className="section2">
        <img src={require("../../../Assets/employerImg1.png")} alt="" className='img1'/>
        <img src={require("../../../Assets/employerImg2.png")} alt="" className='img2'/>
        <img src={require("../../../Assets/employerImg3.png")} alt="" className='img3'/>
        <img src={require("../../../Assets/employerImg5.png")} alt="" className='img4'/>
        <img src={require("../../../Assets/employerImg4.png")} alt="" className='img5'/>
      </div>
    </section>
  );
}

export default Form