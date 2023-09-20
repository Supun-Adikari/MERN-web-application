require('dotenv').config()
const express=require('express'); 

const mongoose=require('mongoose');
const workoutRoutes=require('./routes/workouts')

const app = express();

//middleware to access the things in the request body
app.use(express.json())

//this always get executed first.this is middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//routes
app.use('/api/workouts',workoutRoutes)

//connect to DB
mongoose.connect(process.env.MONG_URI)
  .then(()=>{
    app.listen(process.env.PORT , ()=>{
        console.log(`connected to DB and listening on port ${process.env.PORT}`);
    })
  }) 
  .catch((error) => {
    console.log(error)
  })




