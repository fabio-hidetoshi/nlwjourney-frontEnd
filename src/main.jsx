import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./AppContext";
import "./App.css";
import "./routes/routes.jsx";
import Home from "./components/home.jsx";
import Invite from "./components/invite.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:destination" element={<App />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </Router>
  </AppProvider>
);
