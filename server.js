const express = require("express");
const path = require("path");
const workingHours = require("./middleware/workingHours");

const app = express();
const PORT = 3000;

// middleware
app.use(workingHours);
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "services.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

// server
app.listen(PORT, () => {
  console.log(`Gamer PC Shop running on http://localhost:${PORT}`);
});