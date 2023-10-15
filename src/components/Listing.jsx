import React, { useEffect, useState, useTransition } from "react";
import people from "./people.json";

const Listing = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(people);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (value) {
      startTransition(() =>
        setList(
          people.filter((item) =>
            item.first_name.toLowerCase().includes(value.toLowerCase())
          )
        )
      );
    } else {
      return startTransition(() => setList(people));
    }
  }, [value]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((item, index) => <div key={index}>{item.first_name}</div>)
      )}
    </div>
  );
};

Listing.propTypes = {};

export default Listing;
