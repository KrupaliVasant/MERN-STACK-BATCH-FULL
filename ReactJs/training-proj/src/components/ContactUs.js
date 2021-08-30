import React from "react";

function ContactUs(props) {

  return (
    <div>
      <h2 style={{ color: "blue" }}>Contact Us</h2>
      <h3>Address: {props.address}</h3>
    </div>
  );
}

export default ContactUs;