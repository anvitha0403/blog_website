const express=require('express')
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const mongoose=require("mongoose")

const authRoute=require("./routes/auth");
app.use(express.json())
app.use("/api/auth",authRoute)


mongoose.connect(process.env.DB_URI,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        } )
.catch(err=>{
    console.log(err);
}
)
.then(()=>{
      console.log("connected to mongoose")
     app.listen("5000",()=>{
    console.log("backend is runnning")
}) 
}
  
    

       
  
  
);
