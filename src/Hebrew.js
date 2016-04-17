'use strict'

const CalEventMap = require('./CalEventMap')
const calendar = require('./internal/hebrew-calendar')

class Hebrew extends CalEventMap {
  constructor (opts) {
    super(opts)
    this.calendar = calendar
  }

  get (timezone) {
    var arr = this.dates.map((date) => {
      var o = {
        date: date.toString(),
        start: date.setOffset(-6, 'h').toTimezone(timezone),
        end: date.toEndDate().toTimezone(timezone)
      }
      this._addSubstitute(date, o)
      return o
    })
    return arr
  }
}
module.exports = Hebrew
