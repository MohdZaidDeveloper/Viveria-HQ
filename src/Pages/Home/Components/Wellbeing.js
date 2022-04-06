import { Link } from "react-router-dom";
import mobileImg from "../../../Assets/mobileImg.png";
import laptopImg from "../../../Assets/laptopImg.png";

const Wellbeing = () => {
  const list = [
    {
      id: 1,
      classname: "item",
      heading: "What your ",
      span: "employees get",
      detail:
        "An app to instantly access, track, save and better manage their pay.",
      link: "/employee",
      img: mobileImg,
    },
    {
      id: 2,
      classname: "item-reverse",
      heading: "What",
      span: "you get",
      detail:
        "The market-leading, cloud-based platform to rapidly transform every employee's experience - from boosting recruitment, through to becoming the ultimate financial wellbeing benefit",
      link: "/employer",
      img: laptopImg,
    },
  ];
  return (
    <section className="wellbeing">
      <div className="heading">
        <h1>The market-leading financial wellbeing platform</h1>
      </div>

      {list.map((item) => {
        const { id, classname, heading, span, detail, link, img } = item;
        return (
          <div className={classname} key={id}>
            <img src={img} alt="" />
            <div className="item-details">
              <h2>
                {heading} <span>{span}</span>
              </h2>
              <p>{detail}</p>
              <Link to={link}>Learn More</Link>
            </div>
          </div>
        );
      })}

      <Link to="/contact-us">
        <button>
          Get Viveria HQ
          <img src={require("../../../Assets/rightArrow.png")} alt="" />
        </button>
      </Link>
    </section>
  );
};

export default Wellbeing;
