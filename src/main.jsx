import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routers";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
