let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();

router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

let people = {};

let sample1 = {
  first: 'Josh',
  last: 'wasserman',
  birthday: '2999-09-17',
  email: 'email@address.com',
  phone: '7777777777',
  id: 0
};
let sample2 = {
  first: 'J',
  last: 'wass',
  birthday: '2999-09-17',
  email: 'email@address.com',
  phone: '7777777777',
  id: 1
};

people[`${sample1.id}`] = sample1;
people[`${sample2.id}`] = sample2;

router.get('/users', (req, res) => {
  res.send(people);
});

// Testing schema
var Ajv = require('ajv');
var ajv = new Ajv();
var validationSchema = require('./schemas/validation_schema.json');
var validate = ajv.compile(validationSchema);
var id = 2;
let data = {
  first: 'Josh',
  last: 'wasserman',
  birthday: '2999-09-17',
  email: 'email@address.com',
  phone: '7777777777',
  credit_card: 1234567812345678,
  billing_address: 'Address'
};

// "pattern": "^[a-zA-Z0-9._%+-]+@[a-z0-9]+.[a-z]{3}$"

router.post('/users/new', (req, res) => {
  // console.log(validate);
  console.log('Recieved new person');
  console.log(req.body);
  let newUser = req.body;

  var valid = validate(req.body);

  console.log(valid);
  if (!valid) {
    console.log(validate.errors);
    res.send(valid);
  } else {
    newUser['id'] = id;
    console.log(newUser);
    people[newUser.id] = newUser;
    console.log('peopel array', people);
    id++;
    res.send(newUser);
  }
});
module.exports = {
  router
};

router.get(`/user/:id`, (req, res) => {
  const id = req.params.id;
  console.log(id);
  let user = people[id];
  res.body = user;
  console.log(res.body);
  res.send(res.body);
});

// router.post('/createPerson', (req, res) => {
//   console.log(req.body);
//   people.push(req.body);
//   res.send(req.body);
// });
