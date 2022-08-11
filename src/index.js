import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./context";
import Loadable from "react-loadable";
import "./styles/home.scss";

const loader = () => <div>Loading.</div>;
//
const HomeLazy = Loadable({
  loader: () => import("../src/App"), 
  loading: loader,
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <HomeLazy />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);