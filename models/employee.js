const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required:true
    },
    email:{
        type: String,
        unique: true,
        required:true
    }
}) 

module.exports = mongoose.model("Employee",employeeSchema)