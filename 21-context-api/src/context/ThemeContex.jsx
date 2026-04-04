import React from "react";
import { createContext } from "react";
export const ThemeDataContext = createContext();

const ThemeContex = (props) => {
  return (
    <div>
      <ThemeDataContext.Provider value='Bhupendra'>{props.children}</ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContex;
