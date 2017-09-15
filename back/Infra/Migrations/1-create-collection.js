module.exports.id = 'create-collection'

module.exports.up = function (done) {
  this.db.createCollection('messages', {}, function (_, collection) {
    done()
  })
}
