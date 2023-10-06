import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {}, []);

  return <div>Clock</div>;
}

export default Clock;
