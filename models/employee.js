const {Schema, model} = require('mongoose');

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  skills: {
    type: Array,
  }
});

module.exports = model('Employee', employeeSchema);
