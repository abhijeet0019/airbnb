const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((err) => {
  console.error("MongoDB connection failed:", err);
});


const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();