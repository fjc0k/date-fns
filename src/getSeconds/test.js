// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getSeconds from '.'

describe('getSeconds', function () {
  it('returns the seconds of the given date', function () {
    var result = getSeconds(new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123))
    assert(result === 5)
  })

  it('accepts a string', function () {
    var result = getSeconds(new Date(2014, 6 /* Jul */, 2, 5, 15).toISOString())
    assert(result === 0)
  })

  it('accepts a timestamp', function () {
    var result = getSeconds(new Date(2014, 3 /* Apr */, 2, 23, 30, 42).getTime())
    assert(result === 42)
  })

  it('returns NaN if the given date is invalid', function () {
    var result = getSeconds(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.additionalDigits` is not convertable to 0, 1, 2 or undefined', function () {
    // $ExpectedMistake
    var block = getSeconds.bind(null, new Date(2012, 1 /* Feb */, 29, 11, 45, 5, 123), {additionalDigits: NaN})
    assert.throws(block, RangeError)
  })
})
