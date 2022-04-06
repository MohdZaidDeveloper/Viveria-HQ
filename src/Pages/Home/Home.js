import "../Home/Home.css"

import Header from "./Components/Header";
import Survey from "./Components/Survey";
import Wage from "./Components/Wage";
import Wellbeing from "./Components/Wellbeing";
import Good from "./Components/Good";
import Paycheck from "./Components/Paycheck";
import Footer from "../../Components/Footer";

import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>ViveriaHQ </title>

        <meta
          name="description"
          content="Viveria HQ is a financial wellness platform that enables workers to take a portion of their earned pay, on demand. Better engagement & retention for employers."
        />
        
        <link rel="canonical" href="/" />
      </Helmet>

      <Header />
      <Wage />
      <Wellbeing />
      <Survey />
      <Good />
      <Paycheck />
      <Footer />
    </>
  );
};

export default Home;
