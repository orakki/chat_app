var socket = io();


socket.on('connect',function(){
  console.log('connected to server');

    socket.emit('createMessage',{
     to:'man.gun.tappu@gmail.com',
     text:'hey. this is aman'
   });
});


socket.on('disconnect',function(){
  console.log('disconected to server');
});

socket.on('newMessage',function(message) {
  console.log('New message',message);
});
