const express = require("express");
const cors = require("cors");
const blogs = require("./blogs.json");
const app = express();

app.use(cors());

app.get("/", (_, res) => {
  res.json(blogs);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
