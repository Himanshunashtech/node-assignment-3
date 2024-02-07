const express=require("express");
const router= express.Router();
const user = require('../models/user');
const {getAllusers,getUsersbyid, deleteUsersbyid, createNewuser}=require('../controllers/user');
const { updateUsersbyid } = require("../controllers/user");

router.get("/",getAllusers);

router.get("/:id",getUsersbyid);
// for creating a new user
router.post("/add",createNewuser);
// update function
router.patch('/:id',updateUsersbyid) ;   

// delete function
router.delete('/:id', deleteUsersbyid);

 module.exports = router;
 