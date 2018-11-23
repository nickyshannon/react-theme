import React from "react";

export const themes = {
  brand1: {
    className: "brand1",
    disabled: ["sidebar"]
  },
  brand2: {
    className: "brand2",
    disabled: ["footer"]
  }
};

export const ThemeContext = React.createContext();
