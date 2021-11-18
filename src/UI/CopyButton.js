import React from "react";
import useCopyToClipboard from "../Utils/useCopyToClipboard";

const CopyButton = ({ code }) => {
  const [isCopied, handleCopy] = useCopyToClipboard(1000);

  return (
    <button onClick={() => handleCopy(code)}>
      {isCopied ? "success" : "copy"}
    </button>
  );
};

export default CopyButton;
