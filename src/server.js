require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();
 
app.use(express.json());

app.use("/" , ()=>{
    console.log("Home says HI!");
    
} );

const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=> {
    console.log(`Server is running on ${PORT}`);
});