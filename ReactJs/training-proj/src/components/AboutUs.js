import React, { useState } from "react";

function AboutUs({greet, org}) {
  const [headOffice,setHeadOffice] = useState("Pune");
  // const [numberOfOffices] = useState(10);
  const [numberOfOffices,setnumberOfOffices] = useState(10);

  const changeHeadOffice=()=>{
    setHeadOffice("Mumbai");
    setnumberOfOffices(20)
  }

  return (
    <>
      <h2 style={{ color: "orange" }}>About Us</h2>
      <h3>{greet} to... {org}</h3>
      <p>Head office: {headOffice}</p>
      <p>No. of office: {numberOfOffices}</p>
      <button type="button" onClick={changeHeadOffice}>Click here...</button>
    </>
  );
}
export default AboutUs;