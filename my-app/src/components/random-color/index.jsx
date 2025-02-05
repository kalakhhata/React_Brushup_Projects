import { useEffect, useState } from "react";

export default function RandomColor() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(len) {
    return Math.floor(Math.random() * len);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`); // ✅ Corrected RGB format
  }

  useEffect(() => {
    if (type === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [type]);

  return (
    <>
      <h1>Random Color Generator</h1>

      <div
        style={{
          width: "100vh",
          height: "100vh",
          background: color,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button onClick={() => setType("rgb")}>Create RGB Color</button>
        <button onClick={() => setType("hex")}>Create HEX Color</button>
        <button
          onClick={
            type === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "30px",
            marginTop: "20px",
            gap: "20px",
          }}
        >
          <h1>{type === "hex" ? "HEX Color" : "RGB Color"}</h1>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
}
