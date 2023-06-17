const Person = require('./../models/Person')
const personController = {}


personController.create = (req, res) => {
    const body = req.body;
    const person = new Person(body);
    // Validating the request
    if (!person.id) {
        res.status(400).send ({
            message: 'Cannot create new record!'
        });
        return;
    }
    // Creating a Person object from request body
    const personObject = {
        id: person.id,
        lastName: person.lastName,
        firstName: person.firstName,
        address: person.address,
        city: person.city
    };

    // Saving the Person object in the database
    Person.create(personObject)
    .then(data => {
        res.send(data);
    }) 
    .catch(err => {
        res.status(500).send ({
            Message: err.message || 'Some errors occured when creating a person'
        });
    });
};

personController.delete = async (req, res) => {
    const id = req.body.id; 
    const count = await Person.destroy({ where: { id: id } });
    res.json({Message: `deleted row(s): ${count}`});
}

personController.show = async (req, res) => {
    const id = req.body.id; 
    const result = await Person.findOne({ where: { id: id } });
   if (result === null) 
        res.json({Message: `No record found for ${id}`}); 
   else
        res.json(result); 


}

module.exports = personController;