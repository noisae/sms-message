const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')

const getTime = (value) => {
  if (value) {
    if (typeof value === 'number') {
      return value
    }

    if (value instanceof Date) {
      return value.getTime()
    }
  }

  return null
}

const TimestampType = new GraphQLScalarType({
  name: 'Timestamp',
  description: 'The Timestamp of a date',
  serialize: getTime,
  parseValue: getTime,
  parseLiteral (valueAST) {
    if (valueAST.kind === Kind.STRING) {
      return parseInt(valueAST.value, 10)
    }

    return valueAST.value
  }
})

module.exports = TimestampType
