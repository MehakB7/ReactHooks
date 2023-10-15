import React, { useState, useTransition } from "react";
import people from "./people.json";

const Listing = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(people);

  const [isPending, startTransition] = useTransition();

  const getElements = () => {
    if (value) {
      return list.includes((item) =>
        item.first_name.toLowerCase().includes(value.toLowerCase())
      );
    } else {
      return people;
    }
  };

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {isPending ? (
        <>Loading...</>
      ) : (
        getElements().map((item, index) => (
          <div key={index}>{item.first_name}</div>
        ))
      )}
    </div>
  );
};

Listing.propTypes = {};

export default Listing;
