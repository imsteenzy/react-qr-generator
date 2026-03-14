import React, { useState } from "react";

export const CreateQr = () => {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQrValue(text);
  };

  return (
    <div className="col-md-4 mx-auto mb-5 border rounded p-4 shadow">
      <h2 className="text-center mb-4">Create QR Code</h2>
      <div className="card p-4">
        <div className="card-body">
          <form
            className="d-flex align-items-center justify-content-between gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="form-control border-top-0 border-start-0 border-end-0 rounded-0"
              id="text"
              style={{
                width: "100%",
                outline: "none",
                boxShadow: "none",
                borderColor: "#ced4da",
              }}
              placeholder="Enter text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="submit"
              style={{ whiteSpace: "nowrap" }}
            >
              Generate QR Code
            </button>
          </form>
          {qrValue && (
            <div className="mt-4 text-center">
              {/* QR code component goes here */}
              <span>QR for: {qrValue}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateQr;
