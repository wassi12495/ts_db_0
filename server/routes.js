let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

let people = [];

router.get('/', (req, res) => {
  res.send(people);
});

// router.post('/createPerson', (req, res) => {
//   console.log(req.body);
//   people.push(req.body);
//   res.send(req.body);
// });

// Testing schema
var Ajv = require('ajv');
var ajv = new Ajv();
var validationSchema = require('./validation_schema.json');
var validate = ajv.compile(validationSchema);

let data = {
  firstName: 'Josh',
  lastName: 'wasserman',
  birthday: '2999-09-17',
  email: 'email@address.com',
  phone: '7777777777',
};

// "pattern": "^[a-zA-Z0-9._%+-]+@[a-z0-9]+.[a-z]{3}$"

router.post('/createPerson', (req, res) => {
  // console.log(validate);
  console.log(req.body);
  var valid = validate(req.body);

  console.log(valid);
  if (!valid) console.log(validate.errors);
  else {
    people.push(req.body);
  }
  res.send(valid);
});
module.exports = {
  router,
};
