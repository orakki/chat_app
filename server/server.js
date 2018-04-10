const path = require('path');
const publicPath = path.join(__dirname,'../public');
const http = require('http');
const express =  require('express');
const socketIO = require('socket.io');
var app = express();
var server = http.createServer(app);
const port = process.env.PORT ||3000;
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('new user connected');

  socket.emit('newMessage',{
    from:'amanishwar@outlook.com',
    text:'hey.what is going on.',
    createAt: 123
  });

  socket.on('createMessage',(newMessage)=>{
    console.log('createMessage',newMessage);
  });

  socket.on('disconnect',()=>{
    console.log('user was disconnected');
  });
});

server.listen(port,()=>{
  console.log(`server is up on ${port}`);
});
