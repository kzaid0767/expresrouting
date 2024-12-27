import express from 'express'
import { usersRouter } from './routes/usersRouter.js'
import {postsRouter} from './routes/postsRouter.js'
import { isAuthenticated } from './middleware/isauthenticated.js'
const app = express()
const port  = 8082
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        status:'ok',
        message: 'all hooked up right'
    })
})

/* Users routes for, get all, get 1, update, and delelte */
app.use('/users',usersRouter)

/* Posts routes for, get all, get 1, update, and delete */
app.use('/posts',isAuthenticated, postsRouter)

app.listen(port, ()=>{
    console.log(`Server is running on port${port}`)
})