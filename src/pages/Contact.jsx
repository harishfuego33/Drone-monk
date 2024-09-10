import React from "react";
import { useLocation } from "react-router-dom";
const Contact = () => {
  const location = useLocation();
  const { drone, service } = location.state || {};

  console.log(drone, service);
  return (
    <div>
      contact Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
      aspernatur beatae a, mollitia nam est, ipsa sapiente earum illo at
      recusandae, nulla pariatur voluptates! Asperiores ab et sit quisquam
      labore.
    </div>
  );
};

export default Contact;
