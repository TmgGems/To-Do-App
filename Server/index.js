const express = require("express");
const app = express();

const indexRouter = require("./routes");

const port = 8001;

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
