const express= require('express');
const app= express();

const PORT= process.env.PORT || 2000;

app.use(express.json());

require('./server/config/libs/mongoose'); //initializing mongoose

app.get('/', (req, res)=>{
     return res.send('Wellcome to Weconnect');
})
app.use('/user', require('./server/apis/users/index'));
app.use('/chat', require('./server/apis/chats/index'));

const server= require('http').createServer(app);
server.listen(PORT, ()=>{
    console.log(`server connect to port ${PORT}`);
})

require('./socket')(server);
