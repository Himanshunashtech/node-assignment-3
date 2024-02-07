const User=require('../models/user');

async function getAllusers(req,res){
    const userdata =await User.find({});
   res.json( userdata );
};

async function getUsersbyid(req,res){
    const userdata =await User.findById(req.params.id);
    res.json(userdata);
};

async function updateUsersbyid(req,res){
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.send(updated);
}

async function deleteUsersbyid(req,res){
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({message: " deleted"});
};

async function createNewuser(req,res){
    const body =req.body;
    if(!body||!body.firstName||!body.lastName||!body.email )
        { 
            return res.send((404),(`users are notfound below`))
        }
        await User.create({
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email})
        return res.send(200).json({message: "Success"});

}

module.exports={
    getAllusers,
    getUsersbyid,
    updateUsersbyid,
    deleteUsersbyid,
    createNewuser,
}