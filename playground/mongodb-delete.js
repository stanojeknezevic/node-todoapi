// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
if(err){
  return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// });

// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// });
// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
//   console.log(result);
// });
db.collection('Users').deleteMany({name: 'Milica'});
db.collection('Users').findOneAndDelete({_id: new ObjectID("590234aa0b65232ac8908ab3")}).
then((results)=>{
  console.log(JSON.stringify(results, undefined, 2));
});






//db.close();
});
