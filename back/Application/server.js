const express = require('express')
const { MongoClient } = require('mongodb')
const graphQL = require('Application/graphQL')
const router = require('Application/router')
const { API_PORT } = require('Application/config')
const bodyParser = require('body-parser')

const { MONGO_HOST, MONGO_PORT, MONGO_DB } = require('Application/config')
const MessageRepository = require('Infra/Repository/Message')

MongoClient.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`, (error, db) => {
  if (error) {
    throw error
  }

  const cors = require('cors')

  // Init Repositories
  MessageRepository(db)

  // Init Server
  const api = express()
  api.options('/graphql', cors())
  api.use(cors({
    origin: true,
    credentials: true
  }))

  graphQL(api)

  api.use(bodyParser.urlencoded({ extended: false }))
  api.use(bodyParser.json())
  api.use(router)

  api.listen(API_PORT, () => console.log(`Message Api is running on port ${API_PORT}`))
})
