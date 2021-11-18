import React, { useState } from "react";

const useToggle = () => {
  const [toggleTheme, setToggleTheme] = useState(false);

  const changeTheme = () => {
    setToggleTheme(!toggleTheme);
  };

  return [toggleTheme, changeTheme];
};

export default useToggle;
