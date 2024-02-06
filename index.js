const express=require("express");
const app=express();
const port=5000;
const connectMongoDb = require("./connectMongoDb");
const user=require("./models/user");
const userRouter=require("./routes/user");

// connecting to database
connectMongoDb("mongodb://localhost:27017/user-1");
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// creating a structure for database
app.use("/user",userRouter);


// app is working on the port 5000

app.listen(5000);  