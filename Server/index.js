require("dotenv").config();


const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port =process.env.PORT|| 4002;


mongoose.connect(process.env.DB).then(()=>{
    console.log("Connected to MongoDB");
});

const indexRouter = require("./routes");
app.use(cors());
app.use(express.json());

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
