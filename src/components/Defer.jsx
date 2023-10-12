import React, { useDeferredValue, useMemo, useState } from "react";
function Defer() {
  const [value, setValue] = useState("");
  const deferedValue = useDeferredValue(value);

  const list = useMemo(() => {
    let ans = [...new Array(1000)].map((item, index) => deferedValue);
    return ans;
  }, [deferedValue]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {list.map((item, key) => (
        <div key={key}>{item}</div>
      ))}
    </div>
  );
}

export default Defer;
