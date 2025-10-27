const { timeStamp } = require('console')
const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    name:{type:String,required:false}
},{timeStamp:true})

module.exports = mongoose.model('entry',entrySchema)