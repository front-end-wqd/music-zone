import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/scss/index.scss";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

// 自定义antd主题配置
ConfigProvider.config({
  theme: {
    primaryColor: "#7F54C9",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
