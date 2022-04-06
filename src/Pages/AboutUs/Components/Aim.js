import { Link } from "react-router-dom";
import reach from "../../../Assets/eliminateLogo.png";
import gain from "../../../Assets/gainLogo.png";
import shield from "../../../Assets/reachLogo.png";


const Aim = () => {
  const data = [
    {
      id: 1,
      img: shield,
      heading: "Reach Financial Wellness",
      details:
        "We want to create savings tools that revolutionise our attitudes to saving and empower people to prioritise their savings.",
    },
    {
      id: 2,
      img: gain,
      heading: "Gain Control",
      details:
        "We want all employees across to have power over money to transform their financial lives.",
    },
    {
      id: 3,
      img: reach,
      heading: "Eliminate Needless Debt",
      details:
        "Giving people power over their money means that they can avoid turning to high-cost, short term credit.",
    },
  ];

  return (
    <div className="container">
      <section className="aim">
        <h1>Our aims</h1>
        <div className="border"></div>

        <div className="cards">
          {data.map((item) => {
            const { id, img, heading, details } = item;
            return (
              <div className="card" key={id}>
                <img src={img} alt="" />
                <h3>{heading}</h3>
                <p>{details}</p>
              </div>
            );
          })}
        </div>
      </section>

      
      <section className="get-started">
        <Link to="/contact-us">
          <button>
            Get Started
            <img src={require("../../../Assets/rightArrow.png")} alt="" />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Aim;
