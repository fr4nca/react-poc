import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Routes from "./routes";

import c from "./components";

import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <c.Layout>
          <Routes />
        </c.Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
