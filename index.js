const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const Employee = require('./models/employee');
const Employer = require('./models/employer');

const {getFilterObject} = require('./config/filter');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/naukri', {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let port = 3000;

app.post('/employer', (req, res) => {
  const { /* GET FIELDS */ } = req.body;
  const newEmployer = new Employer({
    /** Write Fields */
  });
  newEmployer.save()
    .then((doc) => res.send(doc))
    .catch((e) => res.status(400).send(e))
});

app.post('/employee', (req, res) => {
  const { /* GET FIELDS */ } = req.body;
  const newEmployer = new Employee({
    /** Write Fields */
  });
  newEmployee.save()
    .then((doc) => res.send(doc))
    .catch((e) => res.status(400).send(e))
});

app.get('/employee', (req, res) => {
  var str = getFilterObject(req.body);
  Employee.find(str)
    .then(employees => {
      // console.log(employees.length);
      return res.send(employees);
    })
    .catch(e => res.status(400).send(e));
})

app.listen(3000, () => { console.log(`Server is up on port ${port}`); });
