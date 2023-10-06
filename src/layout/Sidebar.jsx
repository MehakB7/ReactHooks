import React from "react";
import "./sidebar.css";

const Sidebar = ({ onSelect, options, selected }) => {
  return (
    <div style={{ border: "1px solid black", height: "100vh" }}>
      <ul className="list">
        {options.map((option) => (
          <li key={option} onClick={() => onSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
