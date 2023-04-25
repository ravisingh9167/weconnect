
const socketConn= (server)=>{
    const io= require('socket.io')(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
           }
    });
    
    io.on('connection', (socket)=>{
        console.log('client connected')
        socket.on('disconnect', ()=>{
            console.log('client disconnected');
        })
    })
}

module.exports= socketConn;