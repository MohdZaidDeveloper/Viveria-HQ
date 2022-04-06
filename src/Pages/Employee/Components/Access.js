import img1 from '../../../Assets/lockKey.png';
import img2 from "../../../Assets/settings.png";
import img3 from "../../../Assets/wallet.png";
import bg from "../../../Assets/bg.jpg";

const Access = () => {


    const data = [
      {
        id: 1,
        img: img1,
        line: "Step 1",
        heading: "Sign up",
        details:
          "After your employer signs up with Viveria HQ, simply download the app and create your account. It’s that simple",
      },

      {
        id: 2,
        img: img2,
        line: "Step 2",
        heading: "Work your shift",
        details:
          "When you clock your hours, your earned wages will become accessible shortly after your employer reports them to us.",
      },

      {
        id: 3,
        img: img3,
        line: "Step 3",
        heading: "Get paid",
        details:
          "Find yourself in need of quick cash? simply open the app, check your available balance, and transfer money to your bank account.",
      },
    ];

    
  return (
    <section
      className="access"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain" }}
    >
      <h1>Access your earned salary in 3 easy steps</h1>
      <div className="border"></div>

      <div className="cards">
        {data.map((item) => {
          const { id, img, line, heading, details } = item;
          return (
            <div className="card" key={id}>
              <img src={img} alt="" />
              <p className="small">{line}</p>
              <h3>{heading}</h3>
              <p>{details}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Access