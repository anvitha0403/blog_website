const express=require('express')
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const mongoose=require("mongoose")
const userRoute=require('./routes/users')
const authRoute=require("./routes/auth");
const postRoute=require("./routes/posts")
const catRoute=require("./routes/categories")

app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)
app.use("/api/users",userRoute)
app.use("/api/cat",catRoute)


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
