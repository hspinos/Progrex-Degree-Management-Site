// var faker = require('faker-js');

var {faker} = require("@faker-js/faker")
const database = { users: [],badges:[]};
for (let i = 1; i<= 15; i++) {
let dimensions = getRandomBetween(200,300)

  database.users.push({
    id: i,
    firstName: faker.name.firstName("male"),
    lastName: faker.name.firstName("male"),
    email: faker.internet.email(faker.name.firstName(0), faker.name.firstName(1)),
    password: faker.internet.password(12,true),
    imageUrl: `https://placekitten.com/g/${dimensions}/${dimensions}`,
    badges: [getRandomBetween(1,15),getRandomBetween(1,15),getRandomBetween(1,15)]
  });
}
for (let i = 1; i<= 15; i++) {
    let dimensions = getRandomBetween(200,300)
  database.badges.push({
    id: i,
    name: faker.commerce.productName() +""+faker.commerce.productName(),
    description: faker.lorem.sentences(2),
    price: faker.commerce.price(),
    imageUrl: `https://placekitten.com/g/${dimensions}/${dimensions}`,
    // quantity: faker.datatype.number()
  });
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


console.log(JSON.stringify(database));
