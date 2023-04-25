const {chatModel}= require('./model');

exports.createChat= async (data)=>{
    try{
        await chatModel.create(data);
        return Promise.resolve({msg: 'Chat created successfully'})
    }
    catch(e){
        console.log(e);
        return Promise.reject(e);
    }
}

exports.getChats= async (condition)=>{
    try{
        const chats= await chatModel.find(condition).lean();
        return Promise.resolve({msg: 'Chat fetched successfully', data: chats})
    }
    catch(e){
        console.log(e);
        return Promise.reject(e);
    }
}