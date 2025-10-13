const database = 'ECLIPSE_MEDIA';
const collection = 'users';

// Create a new database.
use('ECLIPSE_MEDIA');

// Create a new collection.
db.createCollection(collection);
db.users.insertOne({
    email:"snehakr654@gmail.com",
    password:"124564"
});
