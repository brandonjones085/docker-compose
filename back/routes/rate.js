const express = require("express")
const multer = require('multer')
const Post = require("../models/post");
const router = express.Router(); 



const MIME_TYPE_MAP = {
    'image/png':'png', 
    'image/jpeg':'jpg', 
    'image/jpg':'jpg'
}


router.put("/:id", (req,res,next)=>{

  
    const post = new Post({
        _id: req.body.id, 
        name: req.body.name, 
        breed: req.body.breed, 
        
        rates: req.body.rates + 1
       
    })
   
    Post.updateOne({_id:req.params.id}, post).then(documents=>{
        console.log("From the backend" + post)
        res.status(200).json({
            message:"Update Successful", 
            post:documents
            
        })
    })
})


router.get("" ,(req,res,next)=>{
    Post.aggregate([{$sample:{size:2}}])
    .then(documents=>{
       console.log(documents)
 
        res.status(200).json({ 
            message:"Pup fetched successfully", 
            posts:documents
          
    });
    });
}); 



module.exports = router; 