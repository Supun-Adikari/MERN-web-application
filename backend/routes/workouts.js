const express=require('express')
const Workout=require('../models/workoutModel')

const router =express.Router()
 //get all workouts
router.get('/',(req,res)=>{
    res.json({mssg:'get all the workouts'})
})

// get single workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'get a single workout'})

})


router.post('/',async (req,res)=>{
    const {title,load,reps}=req.body
    try{
        const workout=await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({errrrror:error.message})

    }

})


router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete a single workout'})

})

router.patch('/:id',(req,res)=>{
    res.json({mssg:'update a single workout'})

})

module.exports=router