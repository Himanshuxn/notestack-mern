const express=require("express");
const dotenv=require('dotenv')
const res = require("express/lib/response");
const { connect } = require("mongoose");
//import colors from "colors";
const path = require("path");
const connectDB = require("./config/db");
const userRoutes  =require('./routes/userRoutes');
const noteRoutes  =require('./routes/noteRoutes');
const { notFound, errorHandler}=require("./middlewares/errorMiddlewares");


const app=express();
dotenv.config();
connectDB();
app.use(express.json());
app.use('/api/users',userRoutes);
app.use('/api/notes',noteRoutes);
// --------------------------deployment------------------------------
const __dirnamee = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirnamee, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirnamee, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------
app.use(notFound);
app.use(errorHandler);
const PORT=process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));