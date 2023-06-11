const {userModel}= require('./model');
const bcrypt= require('bcrypt');

exports.getUsers= async (conditions= {})=>{
    try{
        const users= await userModel.find(conditions, {__v: 0});
        return Promise.resolve(users);
    }
    catch(e){
        console.log(e);
        return Promise.reject(e)
    }
}

exports.addUser= async (userData)=>{
    const {name, mobileNumber, password}= userData;

    if(!name || !mobileNumber || !password) return Promise.reject({msg: 'reuired data not found'});

    try{
        const hashedPassword= await bcrypt.hash(password, 10);
        await userModel.create({name, mobileNumber, password: hashedPassword});
        return Promise.resolve({msg: 'User added successfully'})
    }
    catch(e){
        console.log(e)
        return Promise.reject(e)
    }
}

exports.getUserById= async (id)=>{
    try{
        const user= await userModel.findOne({_id: id}, {__v: 0}).lean();
        if(!user) return Promise.reject({msg: 'User Not Found'})
        return Promise.resolve(user);
    }
    catch(e){
        console.log(e);
        return Promise.reject(e)
    }
}

exports.getConnections= async (users)=>{
    try{
        users= users.sort((a,b) => (a.lastChatTime > b.lastChatTime) ? 1 : ((b.lastChatTime > a.lastChatTime) ? -1 : 0))
        const userIds= users.map(user=> user.userId);
        const projection= {name: 1, mobileNumber: 1};
        const connections= await userModel.find({_id: {$in: userIds}}, projection).lean();
        return Promise.resolve(connections);
    }
    catch(e){
        console.log(e);
        return Promise.reject(e);
    }
}