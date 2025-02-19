import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleInputQR() {
    setQrCode(input);
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        name="qr-code "
        type="text"
        value={input}
        placeholder="Enter Your Value Here"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={handleInputQR}
      >
        Generate
      </button>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} />
      </div>
    </div>
  );
}
