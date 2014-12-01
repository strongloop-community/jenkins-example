var test = require('tape')
var summer = require('../')

test('summer', function (t) {
  var winter = summer(-40)
  t.equal(winter(40), 0, 'should be equal')
  t.end()
})
