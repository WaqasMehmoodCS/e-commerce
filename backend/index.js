import express from "express";
import mongoose from "mongoose";

const app = express();

//declare routes
app.get("/", (req, res) => {
  res.send("Hello from Backened!!!");
});

//start server
app.listen(5000, () => {
  console.log(`Node api is running on port 5000`);
});
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
