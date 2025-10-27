const express =require("express")

const router = express.Router()

router.get('/list',(req,res)=>{
    return res.status(200).json({status:true,message:"Data found"})
})

module.exports = router