// const mongoose = require('mongoose')
import mongoose from "mongoose"

const DBURL = 'mongodb://localhost:27017/cleaningServices'

const connect = async () => {
    await mongoose.connect(DBURL)
    console.log("database connected")
}

export default connect



