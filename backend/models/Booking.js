
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  place: String
});

module.exports = mongoose.model("Booking", bookingSchema);