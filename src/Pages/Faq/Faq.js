import "../Faq/Faq.css";

import Accodian from "./Components/Accodian";
import Header from "./Components/Header";
import Footer from "../../Components/Footer";

import { Helmet } from "react-helmet-async";


const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Faq | ViveriaHQ </title>
        <link rel="canonical" href="/faq" />
      </Helmet>


      <Header />
      <Accodian />
      <Footer />
    </>
  );
};

export default Faq;
