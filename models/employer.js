const {Schema, model} = require('mongoose');

const employerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    unique: true,
    required: true
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true
  }
});

module.exports = model('Employer', employerSchema);
