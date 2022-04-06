import React from 'react'
import Header from './Components/Header';
import Footer from "../../Components/Footer";
import Enquiry from './Components/Enquiry';


import { Helmet } from "react-helmet-async";


const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Viveria </title>
        <link rel="canonical" href="/contact-us" />
      </Helmet>

      <Header />
      <Enquiry />
      <Footer />
    </>
  );
}

export default ContactUs