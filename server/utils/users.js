[{
  id:'/#1211bqchf03hhfwefj',
  name:'aman',
  room:'The Office Fans'

}]

//addUser(id,name,room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser(id,name, room){
    var user = {id,name,room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.getUser(id);
    if(user){
      this.users = this.users.filter((user)=> user.id !== id);
    }
    return user;
    //return user that was removed
  }
  getUser (id){
    return this.users.filter((user)=> user.id === id)[0]
  }
  getUserList (room) {
    var users = this.users.filter((user)=>{
      return user.room === room;
    });
    var namesArray = users.map((user)=>{
    return  user.name
    });
    return namesArray;
  }
}
module.exports = {Users};
// class Person{
//   constructor (name, age) {
//     this.name=name;
//     this.age = age;
//   }
// }
//
// var me = new Person('aman',22);
// console.log('this.name',me.name);
// console.log('this.age',me.age);
