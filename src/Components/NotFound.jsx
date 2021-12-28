import React from "react";
import foto3 from "../Profile/assets/wave.png";

const NotFound = () => {
  return (
    <div style={{ marginTop:"50px" ,display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <img src={foto3} alt="OOPS!" style={{ width: "240px", height: "180px" }} />
      <h4 style={{ fontSize: "16px", marginTop: "20px", fontStyle: "normal" }}>Uh-oh!</h4>
      <p>No orders found. Try to change the timeframe,maybe?</p>
    </div>
  );
};

export default NotFound;
