const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8002;

mongoose.connect("mongodb://127.0.0.1:27017/to-do-app").then(()=>{
    console.log("Connected to MongoDB");
});

const indexRouter = require("./routes");

app.use(express.json());

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
