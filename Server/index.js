const express = require("express");
const app = express();

const indexRouter = require("./routes");

const port = 8090;

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
