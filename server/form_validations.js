var Ajv = require('ajv');
var ajv = new Ajv();
var validationSchema = require('./validation_schema.json');

var validate = ajv.compile(validationSchema);
var valid = validate(data);
if (!valid) console.log(validate.errors);
