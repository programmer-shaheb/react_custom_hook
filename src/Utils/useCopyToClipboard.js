import React, { useCallback, useEffect, useState } from "react";
import copy from "copy-to-clipboard";

const useCopyToClipboard = (resetInterval = null) => {
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    let timer;

    if (isCopied && resetInterval) {
      timer = setTimeout(() => {
        setCopied(false);
      }, resetInterval);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied, resetInterval]);

  const handleCopy = useCallback((text) => {
    if (typeof text === "string" || typeof text === "number") {
      copy(text.toString());
      setCopied(true);
      console.log(text);
    } else {
      setCopied(false);
      console.log(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number`
      );
    }
  }, []);

  return [isCopied, handleCopy];
};

export default useCopyToClipboard;
