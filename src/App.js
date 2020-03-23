import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Routes, { routesCode } from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
