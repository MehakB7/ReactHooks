import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState("");
  const [start, setStart] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1000 >= 0 || 0);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [start]);

  const onStart = () => {
    setStart(true);
    setTime(inputRef.current.value || 0);
  };

  const onPause = () => {
    setStart((prev) => !prev);
  };

  const onReset = () => {
    inputRef.current.value = "";
    setStart(false);
  };

  const formatString = () => {
    // const minutes =
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Please Enter time on minutes" />
      <div>
        <button onClick={onStart}>Start</button>
        <button onClick={onPause}>{start ? "Pause" : "Resume"}</button>
        <button onClick={onReset}>reset</button>
      </div>
    </div>
  );
};

export default Timer;
