import React, { useRef, useState } from "react";

function Canvas() {
  const ref = useRef();

  const [isDrawing, setDrawing] = useState(false);

  const [color, setColor] = useState("black");

  const [cordiantes, setCordinates] = useState({ x: 0, y: 0 });

  const colors = ["black", "red", "green", "blue"];

  const onMouseMove = (e) => {
    const ctx = ref.current.getContext("2d");

    if (isDrawing) {
      ctx.strokeStyle = color; // Color of the stroke
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cordiantes.x, cordiantes.y);
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
      setCordinates({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
  };

  const startDrawing = (e) => {
    const ctx = ref.current.getContext("2d");
    setDrawing(true);
    setCordinates({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    ctx.closePath();
  };

  const endDrawing = () => {
    const ctx = ref.current.getContext("2d");
    setDrawing(false);
    ctx.closePath();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <canvas
        style={{ border: "1px solid black" }}
        ref={ref}
        onMouseDown={startDrawing}
        onMouseMove={onMouseMove}
        width={"600px"}
        height={"400px"}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
      />
      <div>
        {colors.map((item) => (
          <button
            style={{ background: item, padding: "10px" }}
            onClick={() => setColor(item)}
          ></button>
        ))}
      </div>
    </div>
  );
}

Canvas.propTypes = {};

export default Canvas;
