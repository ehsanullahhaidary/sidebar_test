import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./components/ErrorSection/ErrorPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     // children: [
//     //   {
//     //     path: "dashboard",
//     //     element: <Content />,
//     //   },
//     //   {
//     //     path: "contact",
//     //     element: <Contact />,
//     //   },
//     //   {
//     //     path: "account",
//     //     element: <Account />,
//     //   },
//     //   {
//     //     path: "settings",
//     //     element: <Settings />,
//     //   },
//     // ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
