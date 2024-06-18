const { time } = require('console')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(

    {
        full_name : String,
        outlinedmultilinestatic : String,
        contact : Number,
        time : Number,
        testname : string

    }
)

const userModel = mongoose.model("Users",UserSchema)
module.exports = userModel