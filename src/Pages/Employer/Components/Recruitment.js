import { useEffect, useState, useCallback } from "react";

const Recruitment = () => {
  const names = [
    {
      heading: "60%",
      detail: "Employees want access to their earned wage",
    },
    {
      heading: "37%",
      detail: "Increase from retention",
    },
    {
      heading: "2.7x",
      detail: "Faster recruitment",
    },
  ];

  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <section className="recruitment">
      <h1>Better recruitment, engagement, retention. At zero cost to you.</h1>
      <div className="numbers">
        <h1>{newName.heading}</h1>
        <h3>{newName.detail}</h3>
      </div>
    </section>
  );
};

export default Recruitment;
