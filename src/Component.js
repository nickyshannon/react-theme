import React from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "./theme-context";
import { disableable } from "./disableable";
import { withTheme } from "./withTheme";

export class Component extends React.Component {
  render() {
    return (
      <div className={`Component Component--${this.props.theme.className}`}>
        {this.props.title}
      </div>
    );
  }
}

export const ThemedComponent = withTheme(disableable(Component));
