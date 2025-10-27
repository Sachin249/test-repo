const express = require('express')
const path = require('path')
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/test',(req,res)=>{
    res.send("server is working")
})

app.get('/test2',(req,res)=>{
    res.send("server is working")
})


app.use('/entry',require('./controllers/entrycontroller'))

app.post("/add-user",upload.single('avatar'),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    return res.send("ok")
})
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})