// Cart total in whole đồng. See README.md for the specification.
export function cartTotal(items, options) {
  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError(`price must not be negative: ${item.name}`)
    }
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError(`qty must be a positive integer: ${item.name}`)
    }
  }

  if (items.length === 0) {
    return 0
  }

  const { vatRate, freeShipFrom, shipFee } = options
  let subtotal = 0
  for (const item of items) {
    subtotal += item.price * item.qty
  }
  const vat = subtotal * vatRate
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee

  return Math.round(subtotal + vat + shipping)
}
