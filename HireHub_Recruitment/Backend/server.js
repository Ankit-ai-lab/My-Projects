const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const auth = require("./routes/authRoutes");
const dish = require("./routes/");
const order = require("./routes/orderRoutes");
const password = require("./routes/passwordRoutes");

const app = express();
app.use(express.json());
connectDB();

app.use("/auth", auth);
app.use("/", dish);
app.use("/", order);
app.use("/password", password);

app.use((req, res) => {
  res.status(404).send("Route not found");
});
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT} 😎😎`);
});