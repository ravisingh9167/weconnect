const mongoose= require('mongoose');

const chatSchema= new mongoose.Schema({
    msg: {type: String},
    from: {type: mongoose.Types.ObjectId},
    to: {type: mongoose.Types.ObjectId}
},
{
    timestamps: true
})

const chatModel= mongoose.model('chats', chatSchema, 'chats')

module.exports= {chatModel};