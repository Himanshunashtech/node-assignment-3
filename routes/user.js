const express=require("express");
const router= express.Router();
const user = require('../models/user')

router.get("/",async(req,res)=>{
    const userdata =await user.find({});
   res.json( userdata );
});

router.get("/:id",async(req,res)=>{
    const userdata =await user.findById(req.params.id);
   res.json(userdata);
});
// for creating a new user
router.post("/add",async (req,res)=>{ 
    const body =req.body;
    if(!body||!body.firstName||!body.lastName||!body.email )
        { 
            return res.send((404),(`users are notfound below`))
        }
        await user.create({
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email})
        return res.send(200);
    });
// update function
router.patch('/:id',async(req,res)=>{
const updated = await user.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.send(updated);
}) ;   

// delete function
router.delete('/:id', async(req,res)=>
{
    await user.findByIdAndDelete(req.params.id);
    res.status(200).json({message: " deleted"});
});

 module.exports = router;
 