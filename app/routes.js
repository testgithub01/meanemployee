var Employee = require('./models/employee.js');

module.exports = function(app) {

  /**
   * Find and retrieves all employees
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  findAllemployees = function(req, res) {
    console.log("GET - /employee");
    return Employee.find(function(err, employees) {
      if(!err) {
        return res.send(employees);
      } else {
        res.statusCode = 500;
        console.log('Internal error(%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };



  /**
   * Find and retrieves a single employee by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  findById = function(req, res) {

    console.log("GET - /employee/:id");
    return Employee.findById(req.params.id, function(err, employee) {

      if(!employee) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if(!err) {
        return res.send({ status: 'OK', employee:employee });
      } else {

        res.statusCode = 500;
        console.log('Internal error(%d): %s', res.statusCode, err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };




  /**
   * Creates a new employee from the data request
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  addemployee = function(req, res) {

    console.log('POST - /employee');

    var employee = new Employee({
        names : req.body.names,
        lastnames: req.body.lastnames,
        profession: req.body.profession,
        businessarea: req.body.businessarea,
        admissiondate: req.body.admissiondate
        }
      );

    employee.save(function(err) {

      if(err) {

        console.log('Error while saving employee: ' + err);
        res.send({ error:err });
        return;

      } else {

        console.log("employee created");
        return res.send({ status: 'OK', employee:employee });

      }

    });

  };



  /**
   * Update a employee by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  updateemployee = function(req, res) {

    console.log("PUT - /employee/:id");
    return Employee.findById(req.params.id, function(err, employee) {

      if(!employee) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if(req.body.names!=null) employee.names=req.body.names;
      if(req.body.lastnames!=null) employee.lastnames=req.body.lastnames;
      if(req.body.profession!=null) employee.profession=req.body.profession;
      if(req.body.businessarea!=null) employee.businessarea=req.body.businessarea;
      if(req.body.admissiondate!=null) employee.admissiondate=req.body.admissiondate;

      return employee.save(function(err) {
        if(!err) {
          console.log('Updated');
          return res.send({ status: 'OK', employee:employee });
        } else {
          if(err.name == 'ValidationError') {
            res.statusCode = 400;
            res.send({ error: 'Validation error' });
          } else {
            res.statusCode = 500;
            res.send({ error: 'Server error' });
          }
          console.log('Internal error(%d): %s',res.statusCode,err.message);
        }

        res.send(employee);

      });
    });
  };



  /**
   * Delete a employee by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  deleteemployee = function(req, res) {

    console.log("DELETE - /employee/:id");
    return Employee.findById(req.params.id, function(err, employee) {
      if(!employee) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      return employee.remove(function(err) {
        if(!err) {
          console.log('Removed employee');
          return res.send({ status: 'OK' });
        } else {
          res.statusCode = 500;
          console.log('Internal error(%d): %s',res.statusCode,err.message);
          return res.send({ error: 'Server error' });
        }
      })
    });
  }

  //Link routes and actions
  app.get('/employee',findAllemployees);
  app.get('/employee/:id',findById);
  app.post('/employee',addemployee);
  app.put('/employee/:id',updateemployee);
  app.delete('/employee/:id',deleteemployee);


}