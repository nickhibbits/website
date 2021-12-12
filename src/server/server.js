const express = require("express");

const app = express();

const port = 3000;

const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

app.use(express.static("src"));
