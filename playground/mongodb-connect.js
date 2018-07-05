// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);

// const user = {name: 'Andrew', age: 25};
// const {name} = user;
// console.log(name);

// Arguments are (err, client) in new versions of mongoDB
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // const db = client.db('TodoApp')

// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert todo', err);
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

  // db.collection('Users').insertOne({
  //   name: 'Daniel',
  //   age: 20,
  //   location: 'North Carolina'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
  // client.close()
});
