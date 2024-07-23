// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./AppContext";
import Content from "./components/home";
import Invite from "./components/invite"; // Certifique-se de que este componente existe

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/invite" element={<Invite />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
