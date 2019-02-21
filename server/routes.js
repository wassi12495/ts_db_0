let express = require('express');
let bodyParser = require('body-parser');

let router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

let data = 'test';
let people = [];

router.get('/', (req, res) => {
  res.send(people);
});

router.post('/createPerson', (req, res) => {
  console.log(req.body);
  people.push(req.body);
  res.send(req.body);
});
module.exports = {
  router
};
