const bookRoutes = require("./src/routes/book.js");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/books", bookRoutes);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
