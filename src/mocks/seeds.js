const faker = require('faker')
const fs = require('fs')
const moment = require('moment')

const statuses = ['resolved', 'wait for reply', 'contacted', 'pending']

function getRandomTicket(users) {
  const index = faker.random.number(users.length - 1)
  const user = users[index]
  if (!user) {
    console.log(user, index)
    return
  }
  return {
    id: faker.random.number(),
    title: faker.random.words(),
    description: faker.lorem.paragraphs(),
    assignee: user.id,
    status: statuses[faker.random.number(3)],
    date: moment()
      .subtract(faker.random.number(7), 'days')
      .toISOString(),
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
  userData.push(getRandomUsers())
}
for (let i = 0; i < 50; i++) {
  ticketData.push(getRandomTicket(userData))
}

fs.writeFileSync('./backend/Users.json', JSON.stringify(userData, false, 2), {
  encoding: 'utf8',
})

fs.writeFileSync(
  './backend/Tickets.json',
  JSON.stringify(ticketData, false, 2),
  {
    encoding: 'utf8',
  }
)
