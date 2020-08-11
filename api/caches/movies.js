// File: caches/movies.js
// Date: 8/11/2020
// Note: https://github.com/marak/Faker.js


var faker = require('faker');

function generateMovies() {
    var movies = [];

    for (var id = 0; id < 1000; id++) {
        var name = faker.random.words();
        var director = faker.name.firstName() + ' ' + faker.name.lastName();
        var rating = Math.floor(Math.random()*100+1)/10;
        
        movies.push({
            "id": id,
            "name": name,
            "director": director,
            "rating": rating
        });
    }
    return { "movies": movies }
}

module.exports = generateMovies;

// eof
