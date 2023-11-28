import express, { Application } from 'express'

import userRouter from './routes/userRoutes'
import cors from 'cors'
import morgan from 'morgan'
import connect from './mongoose/connect'


const app:Application = express()

app.use(cors())
app.use(morgan('dev'))

app.use('/user',userRouter())


connect()


app.listen(3000, () => {
    console.log(`listening on ${3000}`)
})