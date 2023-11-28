

import express from 'express'
import morgan from 'morgan'

import connect from './mongoos/connect'
import userRouter from './routes/userRoute'
import cors from 'cors'




const app = express()

app.use(morgan('dev'))
app.use(
    cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
    );
    
connect()
app.use('/user/api', userRouter)



app.listen(3000, () => {
    console.log(`sever is running on ${3000}`)
})