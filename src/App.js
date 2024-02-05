import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import Header from "./components/Header";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};
root.render(<App />);
