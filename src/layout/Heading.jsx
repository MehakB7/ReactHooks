import React from "react";

const Heading = ({ title, desc }) => {
  return (
    <div>
      <h3> {title}</h3>
      <p> {desc}</p>
    </div>
  );
};

Heading.propTypes = {};

export default Heading;
