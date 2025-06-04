import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home.tsx";
import Layout from "./components/Layout.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";
import Cookie from "./components/Cookie.tsx";

const App: React.FC = () => {
  return (
    <Cookie>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </Cookie>
  );
};

export default App;
