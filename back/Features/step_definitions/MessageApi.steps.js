const { defineSupportCode } = require('cucumber')
const { expect } = require('chai')

const MessageFixture = require('Features/Fixtures/Message.fixture')
const MessageEntity = require('Domain/Message/Entity/Message')
const MessageApiService = require('Domain/Message/ApiService')
const MessageRepository = require('Infra/Repository/Message')()
const MessageSMSClient = require('Infra/Client/MessageSMS')

defineSupportCode(({ Given, When, Then }) => {
  Given(/^I have Messages$/, function () {
    const MessageRepositoryMock = this.World.mockDependency(MessageRepository)

    this.World.Constants.Messages = MessageFixture.buildList(1)

    MessageRepositoryMock
      .expects('list')
      .resolves(this.World.Constants.Messages)

    this.World.Expects = { MessageRepositoryMock }
    this.World.Boundaries = { MessageRepository }
  })

  When(/^I retrieve a list of Messages$/, async function () {
    this.World.Result = await MessageApiService.list(this.World.Boundaries)
  })

  Then(/^I receive a list of Messages$/, function () {
    const { Result, Expects: { MessageRepositoryMock } } = this.World

    const expectResult = this.World.Constants.Messages

    expect(MessageRepositoryMock.verify()).to.be.equal(true)
    expect(Result).to.be.deep.equal(expectResult)
  })

  Given(/^I have a Message$/, function () {
    const MessageRepositoryMock = this.World.mockDependency(MessageRepository)
    const MessageSMSClientMock = this.World.mockDependency(MessageSMSClient)
    this.World.fakeTime()

    this.World.Constants.Message = new MessageEntity(MessageFixture.build({ created: new Date(), sended: new Date() }))

    MessageRepositoryMock
      .expects('save')
      .withArgs({ message: this.World.Constants.Message })
      .resolves()

    MessageRepositoryMock
      .expects('update')
      .withArgs({ message: this.World.Constants.Message })
      .resolves()

    MessageSMSClientMock
      .expects('send')
      .withArgs({ message: this.World.Constants.Message })
      .resolves()

    this.World.Expects = { MessageRepositoryMock, MessageSMSClientMock }
    this.World.Boundaries = { MessageRepository, MessageSMSClientMock }
  })

  When(/^I send a Message$/, async function () {
    this.World.Result = await MessageApiService.send({ message: this.World.Constants.Message }, this.World.Boundaries)
  })

  Then(/^The message has been sended$/, function () {
    const { Result, Expects: { MessageRepositoryMock, MessageSMSClientMock } } = this.World

    const expectResult = this.World.Constants.Message

    expect(MessageRepositoryMock.verify()).to.be.equal(true)
    expect(MessageSMSClientMock.verify()).to.be.equal(true)
    expect(Result).to.be.deep.equal(expectResult)
  })
})
