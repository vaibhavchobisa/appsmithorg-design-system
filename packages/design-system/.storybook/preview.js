import React from "react";
import "normalize.css";
import "./styles.css";
import { MemoryRouter } from "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  docs: {
    source: { excludeDecorators: true },
    canvas: {
      sourceState: 'shown'
    }
  },
};

const containerStyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
};

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={["/"]}>
      <div style={containerStyle}>{Story()}</div>
    </MemoryRouter>
  ),
];
