const assert = require('assert')

const addition = (a, b) => {
    return a + b
}

assert.strictEqual(addition(1,2), 3, "1+3 should be 3")
assert.strictEqual(addition(0,3), 3, "0+3 should be 3")
assert.strictEqual(addition(-5,5), 0, "-5+5 should be 0")
assert.strictEqual(addition(-1,-2), -3, "-1+(-2) should be -3")
console.log("ok")