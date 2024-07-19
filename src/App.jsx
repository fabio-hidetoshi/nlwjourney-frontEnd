import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content from "./routes/Content";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Content />
    </>
  );
}

export default App;
