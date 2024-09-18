import { Route, Routes, BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import React from "react";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact/" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
