import React from "react";
import { ThemeContext } from "./theme-context";

export function disableable(Component) {
  return function DisableabledComponent(props) {
    const renderComponent = () => {
      const { theme } = props;

      if (theme && theme.disabled.indexOf(props.id) > -1) return null;

      return <Component {...props} />;
    };
    return renderComponent();
  };
}
