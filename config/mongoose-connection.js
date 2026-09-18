const mongoose = require("mongoose");

console.log("Mongo URI exists:", !!process.env.MONGODB_URI);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

module.exports = mongoose.connection;