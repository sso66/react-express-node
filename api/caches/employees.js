// File: caches/employees.js
// Date: 8/11/2020
// Note: https://github.com/marak/Faker.js


var faker = require('faker');

function generateEmployees() {
    var employees = [];

    for (var id = 0; id < 1000; id++) {
        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        var email = faker.internet.email();
        
        employees.push({
            "id": id,
            "first_name": firstName,
            "last_name": lastName,
            "email": email
        });
    }
    return { "employees": employees }
}

module.exports = generateEmployees;

// eof
