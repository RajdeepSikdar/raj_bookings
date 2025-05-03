import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookingForm.css";

export default function BookingForm() {
  const { placeId } = useParams();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "" });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bookings", { ...formData, place: placeId });
      alert("Booking confirmed!");
    } catch (err) {
      alert("Error in booking.");
    }
  };

  return (
    <div className="booking-form">{/* Wrap everything inside this */}
    <div className="form">   
      <h2>Book Tour for {placeId}</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
    </div>
  );
}
