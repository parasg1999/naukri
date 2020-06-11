const {Schema, model} = require('mongoose');

const employerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
});

module.exports = model('Employer', employerSchema);
