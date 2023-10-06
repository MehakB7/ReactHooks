import React from "react";

const Section = ({ children }) => {
  return (
    <div style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "20px" }}>
      {children}
    </div>
  );
};

Section.propTypes = {};

export default Section;
