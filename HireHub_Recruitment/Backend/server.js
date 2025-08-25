const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const auth = require("./routes/authRoutes");
const order = require("./routes/orderRoutes");
const password = require("./routes/passwordRoutes");

const app = express();
app.use(express.json());

// connect database
connectDB();

// routes
app.use("/auth", auth);
app.use("/order", order);
app.use("/password", password);

app.use((req, res) => {
  res.status(404).send("Route not found");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
