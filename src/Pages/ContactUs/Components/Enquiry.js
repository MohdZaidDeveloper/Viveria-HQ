import { useState } from "react";
import EmployerContact from "./EmployerContact";
import EmployeeContact from "./EmployeeContact";


const Enquiry = () => {
  const [employeeContact, setEmployeeContact] = useState(false);
  const [employerContact, setEmployerContact] = useState(false);

  const [modal, setModal] = useState(false);

  const handleEmployer = () => {
    setEmployerContact(!employerContact);
  };

   const handleEmployee = () => {
     setEmployeeContact(!employeeContact);
   };

  return (
    <section className="enquiry">
      <h2>
        We would like to help you the best possible way. So, please select if
        you are an employer, employee or have a more general enquiry.
      </h2>

      <button onClick={handleEmployer}>
        <img src={require("../../../Assets/bag.png")} alt="" />
        <h3>
          I’m an <span>Employer</span>
        </h3>
      </button>

      {employerContact && <EmployerContact event={handleEmployer} />}

      <button onClick={handleEmployee}>
        <img src={require("../../../Assets/bag.png")} alt="" />
        <h3>
          I’m an <span>Employee</span>
        </h3>
      </button>

      {employeeContact && <EmployeeContact event={handleEmployee} />}
    </section>
  );
};

export default Enquiry;
