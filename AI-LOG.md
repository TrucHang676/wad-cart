# AI-LOG — IA#1 cartTotal with a harness

## 2026-09-29 — reading the IA#1 assignment
- **Tool:** Claude Code.
- **Asked for:** explain IA#1 (session 2 slides, starter README), translate the rubric and the SELF_ASSESSMENT template into Vietnamese.
- **Kept:** the summary of requirements and the four steps, used as my checklist.
- **Changed:** nothing.
- **Rejected:** nothing.
- **By hand:** no code in this step. Re-read the original English rubric myself.

## 2026-09-29 — clone starter, npm test red, own repository
- **Tool:** Claude Code — only to ask which commands to run.
- **Asked for:** the steps to clone the starter, run the tests, and point the remote at my own GitHub repository.
- **Kept:** the order of the commands; renaming the lecturer's `origin` to `upstream`.
- **Changed:** nothing.
- **Rejected:** nothing.
- **By hand:** typed every command myself. `npm test` red: 1 test, 1 fail, `Error: not implemented` at src/cart.js:3.
  Created TrucHang676/wad-cart on GitHub, switched the remote, pushed the starter commit 56048c0.

## 2026-09-29 — rules file CLAUDE.md (commit ed3dc83)
- **Tool:** Claude Code.
- **Asked for:** the whole CLAUDE.md for this repository, following slides 15–16 and the Harness section of the rubric.
- **Kept:** the entire file as written — Stack, Files, Commands, Style, Money, Tests, Never.
- **Changed:** not a single line.
- **Rejected:** its earlier, shorter suggestion (~25 lines); I asked for the full version, which adds the Files and Tests sections.
- **By hand:** read every line before committing. The Style section follows the starter code
  (2-space indent, single quotes, no semicolons).

## 2026-09-29 — lint gate: ESLint (commit b3c5efc)
- **Tool:** Claude Code.
- **Asked for:** one format/lint gate for the repository. It proposed ESLint recommended and tried it on a scratch copy before giving it to me.
- **Kept:** `eslint.config.js` with only `js.configs.recommended`; the script `"lint": "eslint ."`.
- **Changed:** fixed the indentation of eslint.config.js back to 2 spaces to match CLAUDE.md.
- **Rejected:** nothing.
- **By hand:** ran `npm install --save-dev eslint @eslint/js`, added the script to package.json, typed eslint.config.js myself
  (typed with a 4-space indent — against the 2-space rule in CLAUDE.md; ESLint recommended does not check indentation).
  `npm run lint` red: 2 `no-unused-vars` errors (`items`, `options`) at src/cart.js:2 — expected, left as is until cartTotal is implemented.
- **Decision:** ESLint is only a devDependency, a checking tool; src/ imports nothing — "no dependencies" still holds for cartTotal.

## 2026-09-29 — CI on GitHub Actions (commit ad42b4c)
- **Tool:** Claude Code.
- **Asked for:** a CI workflow that runs lint and tests on every push.
- **Kept:** `.github/workflows/ci.yml` as written — ubuntu-latest, Node 22, `npm ci`, `npm run lint`, `npm test`.
- **Changed:** nothing.
- **Rejected:** nothing.
- **By hand:** created the file, committed, pushed. Checked the Actions tab: run #1 "Add CI: lint and test on every push" — Failure, 11s,
  the lint step failed with the same 2 `no-unused-vars` errors at src/cart.js#L2 as on my machine. CI ran red before any code existed.

## 2026-09-29 — brief.md (commit 4f7964b)
- **Tool:** Claude Code — reviewed and edited my draft.
- **Asked for:** review the brief against the Brief section of the rubric, then apply the fixes.
- **Kept:** the whole structure and content of my draft (Task, Files, Contract, Error cases, 7 tests).
- **Changed:** it replaced "no devDependencies" with "no new dependencies" (the repository already has ESLint); added lint and "do not commit" to Done when;
  removed a hedging sentence about where the test file lives; added concrete numbers for the threshold tests (569999, 540000); dropped the typeof check from test 1.
- **Rejected:** nothing.
- **By hand:** the first draft of the brief — task, files, contract, error cases, the list of 7 tests.

## 2026-09-29 — cartTotal implementation and tests (commit 9a280b2)
- **Tool:** Claude Code, in a fresh session that saw only CLAUDE.md and brief.md.
- **Asked for:** "Implement the task described in brief.md. Follow CLAUDE.md." — one prompt, no follow-up.
- **Kept:** all of it, first attempt. src/cart.js validates every item first (`price < 0`,
  `!Number.isInteger(qty) || qty <= 0` → RangeError), returns 0 for an empty cart, uses `>=` for the free-shipping
  threshold, rounds with `Math.round`. test/cart.test.js keeps the starter test and adds 6 tests with the numbers from the brief.
- **Changed:** nothing.
- **Rejected:** nothing — it did not try to install a package or touch files outside src/ and test/.
- **By hand:** none of the code. Reviewed the diff against the five red flags from slide 24 with Claude Code (the earlier session):
  `npm test` 7/7 green, `npm run lint` clean, package.json unchanged; extra probes outside the tests
  (`qty: -1`, `NaN`, `'2'` throw RangeError; `price: 0` allowed; the worked example `=== 467400`).
  Noticed the test file now has two `options` objects — left as is, because the brief says keep the starter test unchanged.

## 2026-09-29 — test for a negative qty (commit 8bf58b0)
- **Tool:** none.
- **Asked for:** —
- **By hand:** wrote 'a negative qty throws RangeError' in test/cart.test.js myself, following the 'qty of 0' test.
  `npm test` 8/8 green, `npm run lint` clean.

## 2026-09-29 — SELF_ASSESSMENT_REPORT.md
- **Tool:** Claude Code.
- **Asked for:** score the submission against the rubric, criterion by criterion, with evidence, and write the report.
- **Kept:** <fill in after reading it>
- **Changed:** <fill in — any mark you moved up or down, and why>
- **Rejected:** <fill in, or "nothing">
- **By hand:** <fill in — at least checking each evidence line against the repository>

## Note
The entries above were drafted by Claude Code at my request, from the commit history and the output I sent it, and later translated
from Vietnamese into English and reformatted at my request. I have read them and confirm they are accurate.
