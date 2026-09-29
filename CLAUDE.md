# Project rules — wad-cart (IA#1)

One function: `cartTotal(items, options)` in `src/cart.js`, returning a cart
total in Vietnamese đồng. The specification is in README.md — read it before
changing any code. If README.md and a brief disagree, stop and ask.

## Stack
- Node.js 22+, plain JavaScript, ES modules (`"type": "module"`).
- Tests: built-in `node:test` + `node:assert/strict`. No test framework.
- Lint: ESLint (`eslint.config.js`, recommended rules) — the only package in
  this repo, and a devDependency. `src/` imports nothing.

## Files
- `src/cart.js` — the implementation. Named export `cartTotal` only.
- `test/cart.test.js` — the tests. One `test()` per rule in README.md.
- `CLAUDE.md`, `brief.md`, `AI-LOG.md` — written by me; do not edit them.

## Commands
- `npm test` — runs every `*.test.js` under test/
- `npm run lint` — ESLint on the whole repo
- Done = both green locally AND on CI (`.github/workflows/ci.yml`, runs on push).

## Style
- Match the starter: 2-space indent, single quotes, no semicolons.
- Named exports, no default exports.
- Import paths keep the `.js` extension: `'../src/cart.js'`.

## Money
- Money is whole đồng. Return a `number`, rounded with `Math.round`.
- Never use `toFixed` — it returns a string, so `=== 467400` fails.
- Empty cart → `0`: no VAT, no shipping.
- Negative `price`, or `qty` that is not a positive integer → throw `RangeError`.

## Tests
- Assert against the spec (numbers from README.md), not against the code.
- Each test checks one rule and can fail for one reason.
- Error cases use `assert.throws(() => ..., RangeError)`.

## Never
- Never add a package (dependency or devDependency) without asking.
- Never edit or delete an existing test to make it pass. Add a new test instead.
- Never swallow an error (`catch {}`, or log-and-continue). RangeError must reach the caller.
- Never touch README.md, package.json, .gitignore or .github/ unless asked.
- Never commit or push. I review the diff and commit myself.
