import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdBrightness7 } from "react-icons/md";

const ToggleIcon = ({ toggleTheme, onChange }) => {
  return (
    <>
      {!toggleTheme ? (
        <MdDarkMode onClick={onChange} size="50" />
      ) : (
        <MdBrightness7 onClick={onChange} size="50" />
      )}
    </>
  );
};

export default ToggleIcon;
