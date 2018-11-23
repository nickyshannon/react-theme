import React from "react";
import ReactDOM from "react-dom";
import { ThemeContext, theme } from "./theme-context";
import { withTheme } from "./withTheme";

export class Page extends React.Component {
  render() {
    return (
      <div className={`Page--${this.props.theme.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export const ThemedPage = withTheme(Page);
