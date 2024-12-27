import express from "express";

const usersRouter = express.Router()

usersRouter.get('/',(req,res)=>{
    res.json({
        message:'all users got'
    })
})

usersRouter.get('/:id',(req,res)=>{
    res.json({
        message:'one user got'
    })
})

usersRouter.put('/:id',(req,res)=>{
    res.json({
        message:'one user updated'
    })
})

usersRouter.delete('/:id',(req,res)=>{
    res.json({
        message:'one user deleted'
    })
})

export {usersRouter}