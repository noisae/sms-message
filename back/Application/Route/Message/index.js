const { Router } = require('express')
const promiseHandler = require('Application/promiseHandler')
const MessageController = require('./Message.controller')

const messageRouter = new Router()

messageRouter.post('/webhook', promiseHandler(MessageController.webhook))
messageRouter.get('/webhook', promiseHandler(MessageController.webhook))

module.exports = messageRouter
