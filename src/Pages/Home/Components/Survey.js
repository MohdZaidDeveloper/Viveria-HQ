import React, { useEffect, useState, useCallback } from "react";

const Survey = () => {

const data = [
  "81% exhaust salary before month end.",
  "Only 29% meet unplanned expenses.",
  "80% feel that Covid raised the need for money in hand.",
  "41% rely on loans from family/friends to meet unexpected expenses",
  "62% unhappy or unsure about financial status",
  "59% employees consider flexible access to salary a deciding factor for their next job"
];

const[newData, setnewData]= useState("");

 const shuffle = useCallback(() => {
   const index = Math.floor(Math.random() * data.length);
   setnewData(data[index]);
 }, []);

 useEffect(() => {
   const intervalID = setInterval(shuffle, 4000);
   return () => clearInterval(intervalID);
 }, [shuffle]);

  return (
    <section className="survey">
      <h1>A recent survey in India says that </h1>

      <div className="list">
        <div className="list-item">
          {/* <img src={require("../../../Assets/tickWhite.png")} alt="" /> */}
          <p>{newData}</p>
        </div>

        {/* {data.map((item) => (
          <div className="list-item" key={item}>
            
            <p>{item}</p>
          </div>
        ))} */}
      </div>
    </section>
  );
}

export default Survey