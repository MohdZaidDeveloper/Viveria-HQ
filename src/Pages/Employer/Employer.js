import "../Employer/Employer.css";

import EWA from "./Components/EWA";
import Header from "./Components/Header";
import Reach from "./Components/Reach";
import Recruitment from "./Components/Recruitment";
import Experience from "../Employee/Components/Experience";
import Form from "./Components/Form";
import Footer from "../../Components/Footer";

import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";


import { Helmet } from "react-helmet-async";


const Employer = () => {
  const data1 = [
    {
      id: 1,
      img: img1,
      heading: "Seamless Integration",
      details:
        "We work with you to get an estimate of wages earned and let employees access up to 50% of their upcoming paycheck. All we need from you is time and attendance files and a roster file; we can work with either flat files or API integrations. Our employer dashboard offers complete visibility into employee usage.",
    },

    {
      id: 2,
      img: img2,
      heading: "Work & Reward Visibility",
      details:
        "Employees can see their money as they earn it, promoting motivation to meet KPIs.",
    },
  ];

  const data2 = [
    {
      id: 1,
      img: img3,
      heading: "No Cost for Businesses",
      details:
        "Viveria HQ is 100% free for the businesses. We front the money requested by your employees and is paid back when you process payroll normally. It’s a zero-cost benefit that requires no change to your cash flow.",
    },

    {
      id: 2,
      img: img4,
      heading: "Reduces Employee Financial Stress",
      details:
        "Timely access to earned wages helps tackle day to day finances without worry and be more productive in the workplace",
    },
  ];

  const data3 = [
    {
      subTitle: "",
      title: "Maximum Benefit. Minimal Effort. Zero Cost.",
      paragraph:
        "Earned wage access should be beneficial for employers, as well as employees. We’ve designed our systems in a way that your HR departments don’t have to worry about increased work or responsibilities. Viveria HQ makes on-demand pay simple.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Employer | ViveriaHQ </title>
        <link rel="canonical" href="/employer" />
      </Helmet>

      <Header />
      <Reach />
      <Recruitment />
      <EWA />
      <Experience data1={data1} data2={data2} data3={data3} />
      <Form />
      <Footer />
    </>
  );
};

export default Employer;
