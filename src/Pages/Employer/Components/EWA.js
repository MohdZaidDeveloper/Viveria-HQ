import React from "react";

const EWA = () => {
  const data1 = [
    {
      id: 1,
      heading: "Recruiting",
      details:
        "Receive twice as many applicants and reduce time to hire for open positions within your company.",
    },
    {
      id: 2,
      heading: "Retention",
      details:
        "Cut turnover in half by helping employees experience higher job satisfaction that makes them less sensitive to small wage increases offered by compititors",
    },
  ];

  const data2 = [
    {
      id: 1,
      heading: "Expense Control ",
      details:
        "Lower turnover means less expense for Filling new positions and a lower need for recruiters/headhunters. Lower absenteeism means less need for temporary staff.",
    },
    {
      id: 2,
      heading: "Productivity",
      details:
        "Reduce absenteeism, increase productivity, and maintain an experienced workforce with established institutional knowledge.",
    },
  ];
  return (
    <section className="EWA">
      <h1>Elevate HR Effectiveness with EWA</h1>

      <div className="sections">
        <div className="section1">
          {data1.map((item) => {
            const { id, heading, details } = item;
            return (
              <div className="card" key={id}>
                <h3>{heading}</h3>
                <p>{details}</p>
              </div>
            );
          })}
        </div>
        <div className="section2">
          <img src={require("../../../Assets/dottedCircle.png")} alt="" />
        </div>
        <div className="section3">
          {data2.map((item) => {
            const { id, heading, details } = item;
            return (
              <div className="card" key={id}>
                <h3>{heading}</h3>
                <p>{details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EWA;
