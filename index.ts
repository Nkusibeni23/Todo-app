import express from "express";

// create a server
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// listen to some port
app.listen(800, () => {
  console.log("Server is running on http://localhost:800");
});
