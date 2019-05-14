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

const data = []
for (let i = 0; i < 50; i++) {
  data.push(getRandomTicket())
}
fs.writeFileSync('./src/mocks/Tickets.json', JSON.stringify(data, false, 2), {
  encoding: 'utf8',
})
