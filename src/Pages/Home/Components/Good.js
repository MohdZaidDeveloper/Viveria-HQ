import tick from "../../../Assets/tickBlue.png";

const Good = () => {
  const list1 = [
    "Free for you",
    "No pre-funding requirements",
    "No extra steps or changes to payroll",
    "Start paying employees day one",
    "Improve retention rates and employee morale",
  ];

  const list2 = [
    "0% interest. No hidden charges",
    "Prevents Overdraft and maintenance fees, which perpetuates the cycle of debts",
    "Eliminates the need to take out high-interest payday loans",
    "Available to 100% of your employees, no credit checks or contracts",
  ];

  return (
    <section className="good">
      <div className="business">
        <h2>Good for Business</h2>
        <div className="section">
          {list1.map((item) => (
            <div className="item">
              <img src={tick} alt="" />
              <p>{item}</p>
            
            </div>
          ))}
        </div>
      </div>

      <div className="employee">
        <h2>Good for Employee</h2>
        <div className="section">
          {list2.map((item) => (
            <div className="item">
              <img src={tick} alt="" />
              <p>{item}</p>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Good;
