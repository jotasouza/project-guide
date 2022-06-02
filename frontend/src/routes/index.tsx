import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Landing } from "../pages/LandingPage";
import { Signup } from "../pages/Signup";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/new" element={<Signup />} />
    </Routes>
  );
};
