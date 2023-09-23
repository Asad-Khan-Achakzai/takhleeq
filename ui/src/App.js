// React imports
import * as React from "react";
import { Routes, Route } from "react-router-dom";

// component imports
import Login from "./components/login";
import Home from "./components/home";

/**
 * Function to render components on a specific route
 * @returns
 */
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};
export default App;
