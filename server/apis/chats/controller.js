const userService= require('./service');

exports.create= async (req, res)=>{
    try{
        const isCreated= await userService.createChat(req.body);
        return res.json(isCreated);
    }
    catch(e){
        console.log(e)
        return res.status(422).json(e)
    }
}

exports.fetch= async (req, res)=>{
    try{
        const {selectedUserId}= req.query;
        const userId= req.userId;
        const condition= {from: {$in: [userId, selectedUserId]}, to: {$in: [userId, selectedUserId]}};
        const chats= await userService.getChats(condition);
        return res.json(chats);
    }
    catch(e){
        console.log(e)
        return res.status(422).json(e)
    }
}