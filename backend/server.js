const express = require("express");
const cors = require("cors");
require("dotenv").config();

const leadRoutes = require("./routes/leadRoutes");

const app = express();


 
app.use(cors());
app.use(express.json());


 
app.use("/api/leads", leadRoutes);


 
app.get("/", (req, res) => {
  res.send("Lead Management API Running");
});


const PORT = process.env.PORT || 5000;
const pool = require("./config/db");

pool.connect()
  .then(() => {
    console.log("PostgreSQL Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
