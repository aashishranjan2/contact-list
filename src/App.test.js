import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("componentDidMount() gets called", () => {
  const div = document.createElement("div");
  const app = ReactDOM.render(<App />, div);
  app.componentDidMount();
});

it("getContactList() gets called", () => {
  const div = document.createElement("div");
  const app = ReactDOM.render(<App />, div);
  app.getContactList();
});

