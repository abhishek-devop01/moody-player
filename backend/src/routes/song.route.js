const express = require('express')
const multer = require('multer')
const router = express.Router()


const upload = multer({storage:multer.memoryStorage()})

router.post('/songs',(req,res)=>{
     console.log(req.body);
     res.status(201).json({
          message: 'song created successfully',
          song: req.body
     })
     
})





module.exports=router