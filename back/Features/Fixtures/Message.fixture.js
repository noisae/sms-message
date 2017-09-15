const faker = require('faker')
const { Factory } = require('rosie')

const MessageFixture = new Factory()
  .attr('id', () => faker.random.uuid())
  .attr('recipient', () => faker.random.number())
  .attr('originator', () => faker.random.number())
  .attr('body', () => faker.lorem.sentence())
  .attr('created', () => faker.date.recent())
  .attr('sended', () => faker.date.recent())

module.exports = MessageFixture
