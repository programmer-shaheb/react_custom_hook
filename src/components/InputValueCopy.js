import React, { useState } from "react";
import CopyButton from "../UI/CopyButton";

const InputValueCopy = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <CopyButton code={inputValue} />
    </>
  );
};

export default InputValueCopy;
