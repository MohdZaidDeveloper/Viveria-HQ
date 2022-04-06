import "../Employee/Employee.css";

import Header from "./Components/Header";
import Experience from "./Components/Experience";
import Access from "./Components/Access";
import Footer from "../../Components/Footer";
import Form from "./Components/Form";

import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";

import { Helmet } from "react-helmet-async";



const Employee = () => {
  const data1 = [
    {
      id: 1,
      img: img1,
      heading: "On-Demand",
      details:
        "You work hard for your money, and you should be able to access the wages you earned whenever you want 24x7. Viveria HQ gives you the financial flexibility you deserve.",
    },

    {
      id: 2,
      img: img2,
      heading: "Earned Wage Access Can Be Good for Your Credit",
      details:
        "While accessing your wages on-demand provides an immediate solution for your financial needs, it can also provide an excellent long-term benefit as well: an improved credit rating. By bridging the gap between paydays, Earned Wage Access can help you avoid high-interest payday loans and credit card dependency, both of which can threaten your credit score if you miss payments. Get your wages when you want, and build a strong foundation for your financial future.",
    },
  ];

  const data2 = [
    {
      id: 1,
      img: img3,
      heading: "Take Control of Your Earnings",
      details:
        "Waiting is overrated. Once you’ve worked your hours, simply request your wages to pay for emergencies, bills, or any other expense that might come up. Access your earnings anytime from your smartphone. Simply open the app, check your available balance, enter the amount, and your money will be on the way.",
    },

    {
      id: 2,
      img: img4,
      heading: "Lower Financial Stress",
      details:
        "Imagine how different your life would be if you could get the money you need whenever you need it. With Viveria HQ on-demand pay solution, you can transfer your earnings directly to your bank account within minutes. Feeling better just thinking about it, aren’t you?",
    },
  ];

  const data3 = [
    {
      subTitle: "ONE MONTH IS TOO LONG TO WAIT",
      title:
        "Experience the ease of on-demand pay without the high-interest … anything.",
      paragraph: "",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Employee | ViveriaHQ </title>
        <link rel="canonical" href="/employee" />
      </Helmet>

      <Header />
      <Experience data1={data1} data2={data2} data3={data3} />
      <Access />
      <Form />
      <Footer />
    </>
  );
};

export default Employee;
