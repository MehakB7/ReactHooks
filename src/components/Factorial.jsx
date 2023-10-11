import React, { useMemo, useState } from "react";

let memo = {};

const Factorial = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const calcualtedValue = useMemo(() => {
    const calculate = (value) => {
      if (value <= 0) {
        return 1;
      } else if (memo[value]) {
        return memo[value];
      } else {
        const ans = parseInt(value) * calculate(value - 1);
        memo[value] = ans;
        return ans;
      }
    };

    calculate(value);

    return memo[value];
  }, [value]);

  return (
    <div>
      <input
        type="range"
        placeholder="Enter the number to calculate factorial"
        value={value}
        onChange={onChange}
        min={0}
        max={21}
      />

      <p> value is {value}</p>
      <p> factorial is {calcualtedValue}</p>
    </div>
  );
};

export default Factorial;
