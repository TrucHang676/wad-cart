import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

test('an empty cart returns 0', () => {
  assert.equal(cartTotal([], options), 0)
})

test('a subtotal just below the threshold pays shipping', () => {
  const items = [{ name: 'A', price: 499999, qty: 1 }]
  assert.equal(cartTotal(items, options), 569999)
})

test('a subtotal exactly at the threshold ships free', () => {
  const items = [{ name: 'A', price: 500000, qty: 1 }]
  assert.equal(cartTotal(items, options), 540000)
})

test('a negative price throws RangeError', () => {
  const items = [{ name: 'A', price: -1, qty: 1 }]
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('a non-integer qty throws RangeError', () => {
  const items = [{ name: 'A', price: 1000, qty: 1.5 }]
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('a qty of 0 throws RangeError', () => {
  const items = [{ name: 'A', price: 1000, qty: 0 }]
  assert.throws(() => cartTotal(items, options), RangeError)
})
