# Brief — cartTotal

## Task
Implement `cartTotal(items, options)` in `src/cart.js` so that the existing
failing test in `test/cart.test.js` passes, and add tests for the cases listed below.

## Files you may touch
- `src/cart.js` — the implementation
- `test/cart.test.js` — add tests; keep the existing test unchanged

Do **not** touch anything else: not `package.json`, `README.md`, `.gitignore`,
or any file outside `src/` and `test/`.

## Constraints
- Plain JavaScript, ES modules (`"type": "module"` is already set).
- **No new dependencies.** Do not run `npm install`. `package.json` must stay unchanged
  (its ESLint devDependency is mine — leave it). `src/cart.js` imports nothing.
- Tests use only the standard library: `node:test`, `node:assert/strict`.
- Export a named function: `export function cartTotal(items, options)`.
- Imports use the file extension: `'../src/cart.js'`.
- Keep it small and readable: no classes, no helper libraries, no clever tricks.

## Contract
- `items`: array of `{ name, price, qty }` — `price` in đồng, `qty` a count.
- `options`: `{ vatRate, freeShipFrom, shipFee }`
  - `vatRate`: e.g. `0.08` for 8% VAT
  - `freeShipFrom`: subtotal at or above this ships free
  - `shipFee`: shipping cost in đồng when below the threshold
- `subtotal` = sum of `price × qty`
- `vat` = `subtotal × vatRate`
- `shipping` = `0` if `subtotal >= freeShipFrom`, otherwise `shipFee`
  (the threshold is compared against the subtotal **before** VAT, and equality means free shipping)
- Return `subtotal + vat + shipping` as a **number** rounded to the whole đồng
  with `Math.round`. Never `toFixed` (it returns a string).
- Empty cart (`items.length === 0`): return `0` — no VAT, no shipping.

## Error cases
- Any `price < 0` → throw `RangeError`.
- Any `qty` that is not a positive integer (`0`, negative, `1.5`, `NaN`) → throw `RangeError`.
- Validate every item before computing anything.
- `price` of `0` is allowed.
- Do not invent extra validation or new error types beyond these two cases.

## Worked example (must hold)
`cartTotal([{name:'A',price:180000,qty:2},{name:'B',price:45000,qty:1}],
{vatRate:0.08, freeShipFrom:500000, shipFee:30000})`
→ subtotal 405000, VAT 32400, shipping 30000 → **467400**

## Tests to write
Each test checks one behaviour, so it can fail for one reason only, and asserts the
specification, not the implementation. Expected values are the ones below — do not
compute them with `cartTotal` itself. Unless stated, use
`{ vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }`.
1. worked example returns `467400`
2. empty cart returns `0`
3. subtotal `499999` (just below the threshold) pays shipping:
   499999 + 39999.92 + 30000 = 569998.92 → **569999**
4. subtotal `500000` (exactly at the threshold) ships free:
   500000 + 40000 + 0 → **540000**
5. negative price throws `RangeError`
6. non-integer qty (`1.5`) throws `RangeError`
7. `qty` of `0` throws `RangeError`

## Done when
`npm test` and `npm run lint` are both green, only `src/cart.js` and
`test/cart.test.js` changed, and `package.json` is unchanged.
Do not commit — stop and show me the diff.
