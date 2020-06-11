const {Schema, model} = require('mongoose');

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

module.exports = model('Employee', employeeSchema);
