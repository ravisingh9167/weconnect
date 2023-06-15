const userService= require('./service');
const jwt= require('jsonwebtoken');
const config= require('./../../config/config');
const { uploadS3, getSignedUrl } = require('../../../utils/helpers/aws');

exports.signup= async (req, res)=>{
    try{
    //    const isUpload= await uploadS3("Hi, This is testing upload");
       const getFile= getSignedUrl("temp.txt")
       return res.send(getFile);
       const body= req.body;
       const users= await userService.getUsers({mobileNumber: body.mobileNumber});
       if(users.length) return res.status(422).json({msg: "user already exist"});

       await userService.addUser(req.body);
       return res.status(200).json({msg: "user added successfully"});
    }
    catch(e){
        console.log(e);
        return res.status(422).json(e);
    }
}

exports.login= async (req, res)=>{
    try{
       const user= req.user
       const token= jwt.sign(user, config.jwt.jwtSecret);
       return res.status(200).json({...user, token})
    }
    catch(e){
        console.log(e);
        return res.status(422).json(e);
    }
}

exports.getConnections= async (req, res)=>{
    const user= req.user;

    try{
        const connections= await userService.getConnections(user.users);
        return res.status(200).json({msg: 'Connections get successfully', data: connections});
    }
    catch(e){
        console.log(e);
        return res.status(422).json(e);
    }
}