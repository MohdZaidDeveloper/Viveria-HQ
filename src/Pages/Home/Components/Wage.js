import tick from "../../../Assets/tickBlue.png";

const Wage = () => {
  return (
    <section className="wage">
      <h2>Earned Wage <br /> Access</h2>
      <div className="wage-list">
        <div className="item item1">
          <img src={tick} alt="" />
          <p>Access up to 50% of earned wages</p>
        </div>
        <div className="item  item1">
          <img src={tick} alt="" />
          <p>No changes to existing payroll</p>
        </div>
        <div className="item">
          <img src={tick} alt="" />
          <p>No pre-funding or escrow</p>
        </div>
      </div>
    </section>
  );
}

export default Wage