import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Employee from "./Pages/Employee/Employee";
import Employer from "./Pages/Employer/Employer";
import Faq from "./Pages/Faq/Faq";
import Home from "./Pages/Home/Home";
import ThankYou from "./Pages/ThankYou/ThankYou";

import "./App.css";
import "./Components/Component.css";
import ScrollToTop from "./Components/ScrollToTop";
import { Helmet } from "react-helmet-async";

function App() {
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

      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/employer" element={<Employer />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
