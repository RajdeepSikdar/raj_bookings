// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import StateDetails from "./pages/StateDetails";
import BookingForm from "./pages/BookingForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/state/:stateName" element={<StateDetails />} />
        <Route path="/book/:placeId" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;