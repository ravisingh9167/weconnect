const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
    name: {type: String},
    mobileNumber: {type: Number},
    password: {type: String},
    adminApproval: {type: Boolean, default: false},
    users: [
        {
            userId: {type: mongoose.Types.ObjectId},
            lastChatTime: {type: Date, default: new Date()}
        }
    ],
    groups: [
        {
            groupId: {type: mongoose.Types.ObjectId},
            lastChatTime: {type: Date, default: new Date()}
        }
    ],
},
{
    timestamps: true
})

const userModel= mongoose.model('users', userSchema, 'users')


module.exports= {userModel};