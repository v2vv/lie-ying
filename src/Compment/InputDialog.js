import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function InputDialog({ dataName }) {
  const [inputValue, setInputValue] = useState("");

  const handleSave = () => {
    localStorage.setItem(dataName, inputValue);
    setInputValue("");
  };

  return (
    <div>
      <label>Enter {dataName} :</label>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <Button variant="outlined" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}

export default InputDialog;
