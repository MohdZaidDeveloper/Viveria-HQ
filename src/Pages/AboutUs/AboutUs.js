import "../AboutUs/AboutUs.css";

import Header from "./Components/Header";
import Aim from "./Components/Aim";
import Footer from "../../Components/Footer";

import { Helmet } from "react-helmet-async";


const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | ViveriaHQ </title>
        <link rel="canonical" href="/about-us" />
      </Helmet>

      <Header />
      <Aim />
      <div style={{ marginTop: "175px" }}></div>
      <Footer />
    </>
  );
};

export default AboutUs;
