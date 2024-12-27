import express from "express";

const postsRouter = express.Router()

/* Methods chaining with express router */

postsRouter.route('/')
    .get((req,res)=>{
    res.json({
        message:'all posts received'
    })
})

postsRouter.route('/:id')
    .get((req,res)=>{
        res.json({
            message:'one post received'
        })
    })
    .put((req,res)=>{
        res.json({
            message:'one post updated'
        })
    })
    .delete((req,res)=>{
        res.json({
            message:'one post deleted'
        })
    })




export {postsRouter}