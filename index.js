require ("dotenv").config();

const express = require("express");
const app = express();
const  bodyParser = require("body-parser");

const cors = require("cors");
const connection = require("./db");
const userRoute= require("./routes/user");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({extended:false}));

connection();

//routes

app.use("/api/user", userRoute);
app.use("/api/auth", authRoutes);


//middleware
app.use(express.json());
app.use(cors);

const port = process.env.PORT || 8080;


 app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


