import React, { useMemo, useState } from "react";

let memo = {};

const Factorial = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const calcualtedValue = useMemo(() => {
    const calculate = (value) => {
      console.log("value os", memo[value]);
      if (value <= 1) {
        return 1;
      } else if (memo[value]) {
        return memo[value];
      } else {
        memo[value] = value * calculate(value - 1);
      }
    };

    calculate(value);
    return memo[value];
  }, [value]);

  return (
    <div>
      <input
        placeholder="Enter the number to calculate factorial"
        value={value}
        onChange={onChange}
      />

      <p> value is {calcualtedValue}</p>
    </div>
  );
};

export default Factorial;
