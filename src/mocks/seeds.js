const faker = require('faker')
const fs = require('fs')

function getRandomTicket() {
  return {
    id: faker.random.number(),
    title: faker.random.words(),
    description: faker.lorem.paragraphs(),
    assignee: faker.name.lastName(),
    status: 'unresolved',
    date: '1 day ago',
  }
}

function getRandomUsers() {
  return {
    id: faker.random.uuid(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    country: faker.address.country(),
  }
}

const ticketData = []
const userData = []
for (let i = 0; i < 50; i++) {
  ticketData.push(getRandomTicket())
  userData.push(getRandomUsers())
}

fs.writeFileSync(
  './src/mocks/Tickets.json',
  JSON.stringify(ticketData, false, 2),
  {
    encoding: 'utf8',
  }
)

fs.writeFileSync('./src/mocks/Users.json', JSON.stringify(userData, false, 2), {
  encoding: 'utf8',
})
