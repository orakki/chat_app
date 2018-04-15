const path = require('path');
const publicPath = path.join(__dirname,'../public');
const http = require('http');
const express =  require('express');
const socketIO = require('socket.io');

const{generateMessage} = require('./utils/message');
var app = express();
var server = http.createServer(app);
const port = process.env.PORT ||3000;
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('new user connected');

socket.emit('newMessage',generateMessage('Admin','welcome to chat app!!!'));
socket.broadcast.emit('newMessage',generateMessage('Admin','new user join'));

  socket.on('createMessage',(message, callback)=>{
    console.log('createMessage',message);
    io.emit('newMessage',generateMessage(message.from,message.text));
    callback('This is from the server');

  // socket.broadcast.emit('newMessage',{
  //   from:message.from,
  //   text:message.text,
  //   createAt:new Date().getTime()
  // });
});

  socket.on('disconnect',()=>{
    console.log('user was disconnected');
  });
});

server.listen(port,()=>{
  console.log(`server is up on ${port}`);
});
