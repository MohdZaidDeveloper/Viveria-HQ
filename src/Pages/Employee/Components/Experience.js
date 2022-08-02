
const Experience = (props) => {
  const { data1, data2, data3 } = props;

  return (
    <section
      className="experience"
    >
      <div className="section1">
        {data3.map((item) => {
          const { subTitle, title, paragraph } = item;
          return (
            <>
              <h3>{subTitle}</h3>
              <h2>{title}</h2>
              <p>{paragraph}</p>
            </>
          );
        })}
      </div>

      <div className="section2">
        {data1.map((item) => {
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

      <div className="section3">
        {data2.map((item) => {
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
  );
};

export default Experience;
