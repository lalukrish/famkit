const express = require("express");
const app = express();
const PORT = 7000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("its running");
});
