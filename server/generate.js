var faker = require('faker');

var database = { login: []};

for (var i = 1; i<= 300; i++) {
  database.login.push({
    id: i,
    username: faker.internet.userName(),
    // description: faker.lorem.sentences(),
    password: faker.internet.password(),
    DOB: faker.date.past()  
    // DOB: faker.date(pattern='%Y-%m-%d', end_datetime=None)
  });
}

console.log(JSON.stringify(database));
