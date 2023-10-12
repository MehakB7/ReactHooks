import React, { useImperativeHandle, useRef } from "react";

const Table = React.forwardRef(({ ...props }, ref) => {
  const scrollRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollToFirst() {
          scrollRef.current.scrollTo(0, 0);
        },
        scrollToLast() {
          scrollRef.current.scrollTo(600, 0);
        },
      };
    },
    []
  );

  return (
    <div style={{ width: "300px", overflowX: "scroll" }} ref={scrollRef}>
      <div
        style={{
          width: "600px",
          display: "flex",
          height: "100px",
        }}
      >
        <div style={{ background: "pink" }}> first</div>
        <div style={{ flexGrow: "1" }}> Middle</div>
        <div style={{ background: "pink" }}> Last</div>
      </div>
    </div>
  );
});

const Scroller = (props) => {
  const ref = useRef();

  return (
    <div>
      <Table ref={ref} />
      <button onClick={() => ref?.current?.scrollToFirst()}>
        Scroll to First
      </button>
      <button onClick={() => ref?.current?.scrollToLast()}>
        Scroll to Last
      </button>
    </div>
  );
};

export default Scroller;
