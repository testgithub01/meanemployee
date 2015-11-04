// app/models/employee.js
// load the things we need
var mongoose = require('mongoose');


// define the schema for our empleadoSchema model
var employeeSchema = mongoose.Schema({

  names:    {
    type    : String,
    require : true
  },
  lastnames:    {
    type    : String,
    require : true
  },
  profession:    {
    type    : String,
    require : true
  },
  businessarea:    {
    type    : String,
    require : true
  },
  admissiondate:    {
    type    : String,
    require : true
  },
  created: {
    type    : Date,
    default : Date.now
  }

});


// create the model for users and expose it to our app
module.exports = mongoose.model('employee', employeeSchema);
