require('dotenv').config()

// Load the Cloudant library.
var Cloudant = require('@cloudant/cloudant');

var username = process.env.cloudant_username;
var password = process.env.cloudant_password;

// Initialize the library
var cloudant = Cloudant({
  account: username,
  password: password
});

const server = require('./src/server')
const app = require('./src/server')

// Using the async/await style.

async function asyncCall() {
  await cloudant.db.create('alice');
  return cloudant.use('alice').insert({ happy: true }, 'rabbit');
}

asyncCall().then((data) => {
  console.log(data); // { ok: true, id: 'rabbit', ...
}).catch((err) => {
  console.log(err);
});

// Using Promises.

cloudant.db.create('alice').then(() => {
  cloudant.use('alice').insert({ happy: true }, 'rabbit').then((data) => {
    console.log(data); // { ok: true, id: 'rabbit', ...
  });
}).catch((err) => {
  console.log(err);
});

// Using Callbacks.

cloudant.db.create('alice', (err) => {
  if (err) {
    console.log(err);
  } else {
    cloudant.use('alice').insert({ happy: true }, 'rabbit', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data); // { ok: true, id: 'rabbit', ...
      }
    });
  }
});
