import React from "react";
import ReactDOM from "react-dom";
import { ThemeContext, themes } from "./theme-context";
import { ThemedPage, Page } from "./Page";
import { ThemedComponent, Component } from "./Component";
import "./styles.scss";

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={themes.brand1}>
        <ThemedPage>
          <ThemedComponent title="sidebar" id="sidebar" />
          <ThemedComponent title="content" id="content" />
          <ThemedComponent title="footer" id="footer" />
        </ThemedPage>
      </ThemeContext.Provider>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
