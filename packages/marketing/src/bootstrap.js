import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and in isolation,
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  // Call mount immediately
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
