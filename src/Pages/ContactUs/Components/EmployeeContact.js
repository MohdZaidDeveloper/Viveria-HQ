import "../../ContactUs/ContactUs.css";

import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const EmployeeContact = (props) => {
  const { event } = props;

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    company : "",
    message: ""
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  //Submit Form data to firebase

  const submitData = async (event) => {
    event.preventDefault();
    const { name, phone, email, message, company  } = userData;

    if (name && phone && email && company && phone.length == 10) {
      const res = await fetch(
      
        "https://employee-data-50188-default-rtdb.firebaseio.com/Employee-Form-Data.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            company,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          phone: "",
          email: "",
          company: "",
          message: ""
        });
        alert("Thank you for the details. We will get back to you shortly!");
        window.location.reload();
      } else {
        alert("Something Went wrong!");
      }
    } else {
      alert("Please fill all the fields correctly!");
    }
  };

  return (
    <div className="overlay">
      <section className="contact">
        <div className="contact-img" onClick={event}>
          <FaTimes size={25} style={{ color: "#2c4364" }} />
        </div>

        <form method="POST">
          <h2>Please Fill Up The Details</h2>
          <div className="field">
            <input
              type="text"
              placeholder="Name*"
              required
              autoComplete="off"
              name="name"
              value={userData.name}
              onChange={postUserData}
            />

            <input
              type="tel"
              placeholder="Phone Number*"
              required
              autoComplete="off"
              name="phone"
              value={userData.phone}
              onChange={postUserData}
            />
          </div>
          <div className="field">
            <input
              type="email"
              placeholder="Email*"
              autoComplete="off"
              name="email"
              value={userData.email}
              onChange={postUserData}
            />

            <input
              type="text"
              placeholder="Company Name*"
              autoComplete="off"
              name="company"
              value={userData.company}
              onChange={postUserData}
            />
          </div>

          <textarea
            name="message"
            value={userData.message}
            onChange={postUserData}
            cols="30"
            rows="4"
            placeholder="Message (Optional)"
          ></textarea>

          <div className="btn">
            <button type="submit" onClick={submitData}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EmployeeContact;
