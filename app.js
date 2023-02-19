const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT | 5000;

//For Database connectivity
require("./config/db")

//Importing the router 
const products_routes = require("./routes/products");




//Setting the route


app.get("/",(req,res)=>{
    res.send("Server is Running........... ")
})
app.use("/api/products",products_routes);

app.listen(port,()=>{
    console.log("Server is running at port "+ port);
})