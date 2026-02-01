const express = require("express");
const mongoose = require("mongoose");
const app = express();
const listing = require("./models/listing.js")


mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((err) => {
  console.error("MongoDB connection failed:", err);
});


// app.get("/" ,(req, res)=>{
//     console.log("hi")
//    res.send("hi from abhi");
// })

// app.get("/test", async(req,res)=>{
//      let samplelisting = new listing({
//         title: "My New Villa",
//         description:"By the beach",
//         price:1200,
//         location:"Calangute, Goa",
//         country:"India"
//      }) ;

//      await samplelisting.save();
//      console.log("sample was saved");
//      res.send("successful testing")
// })


  
app.listen(8080 ,()=>{
    console.log(`Server is runing at port ${8080}`);
})

