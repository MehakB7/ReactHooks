import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState("");
  const [start, setStart] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setTime((prev) => {
          let newTime = prev - 1;
          if (newTime < 0) {
            clearInterval(interval);
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [start]);

  const onStart = () => {
    setStart(true);
    setTime((inputRef.current.value || 0) * 60);
  };

  const onPause = () => {
    setStart((prev) => !prev);
  };

  const onReset = () => {
    inputRef.current.value = "";
    setTime(0);
    setStart(false);
  };

  const formatString = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours > 9 ? hours : "0" + hours}:${
      minutes > 9 ? minutes : "0" + minutes
    }:${seconds > 9 ? seconds : "0" + seconds} `;
  };

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="Enter Minutes"
        style={{ padding: "0.3rem" }}
      />
      <div>
        <button onClick={onStart}>Start</button>
        <button onClick={onPause}>{start ? "Pause" : "Resume"}</button>
        <button onClick={onReset}>reset</button>
      </div>
      <b>{formatString()}</b>
    </div>
  );
};

export default Timer;
