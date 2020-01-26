var faker = require('faker');

var database = { login: []};

for (var i = 1; i<= 300; i++) {
  database.login.push({
    id: i,
    username: faker.internet.userName(),
    // description: faker.lorem.sentences(),
    password: faker.internet.password() 
    // imageUrl: "https://source.unsplash.com/1600x900/?product" 
  });
}

console.log(JSON.stringify(database));
