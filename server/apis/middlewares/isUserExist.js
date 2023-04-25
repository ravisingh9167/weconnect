const {userModel}= require('../users/model')

const isUserExist= async (req, res, next)=>{
    const mobileNumber= req.mobileNumber || req.body.mobileNumber;
    if(!mobileNumber) return res.status(404).json({msg: 'User Not Found'})

    try{
        const user= await userModel.findOne({mobileNumber, adminApproval: true}).lean();
        if(!user) return res.status(422).json({msg: 'User Not Found'});
        req.userId= user._id;
        req.user= user;
        next()
    }
    catch(e){
        return res.status(422).json(e)
    }
}

module.exports= isUserExist;